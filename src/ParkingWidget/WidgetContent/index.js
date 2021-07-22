// import './style.less';
import Component from '../../utils/Component';
import SmallPark from './SmallPark';
import BigPark from './BigPark';

/**
 * @description Widget Content class with toggle logic
 */
class WidgetContent extends Component {
    /**
     * @constructor
     * @param {Object} vendor 
     * @param {Object} parkings 
     * @param {Object} dictionary 
     * @param {Function} addToCart 
     */
    constructor(vendor, parkings, dictionary, addToCart) {
        super();
        this.showDetails = false;
        this.thisNode = this.create('div', 'widgetContent');

        this.vendor = vendor;
        this.parkings = parkings;
        this.dictionary = dictionary;
        this.addToCart = addToCart;

        this.smallPark = new SmallPark(vendor, dictionary, this.toggleDetails);
    }

    /**
     * @description Switch from small to large widget visualization
     */
    toggleDetails = () => {
        this.showDetails = !this.showDetails;
        this.update();
    };

    /**
     * @description Switch content in div in order to show parking details
     */
    update = () => {
        const thisNode = document.querySelector('.widgetContent');
        const thisNodeContent = document.querySelector('.widgetContent > *');

        const smallPark = new SmallPark(this.vendor, this.dictionary, this.toggleDetails).render();
        const bigPark = new BigPark(this.vendor, this.dictionary, this.parkings, this.toggleDetails, this.addToCart).render();
        const parkComponentToRender = this.showDetails ? bigPark : smallPark;

        if (thisNodeContent) {
            thisNodeContent.replaceWith(parkComponentToRender);
        } else {
            thisNode.appendChild(parkComponentToRender);
        }
    };

    /**
     * @returns {Node} Widget Content
     */
    render() {
        this.thisNode.appendChild(this.smallPark.render());
        return this.thisNode;
    }
}

export default WidgetContent;
