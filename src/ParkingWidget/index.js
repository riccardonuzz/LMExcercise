import WidgetContent from './WidgetContent';
import Component from '../utils/Component';

/**
 * @description Widget main container class
 */
class ParkingWidget extends Component {
    
     /**
     * @constructor
     * @param {Object} vendor 
     * @param {Array} parkings 
     * @param {Object} dictionary 
     * @param {Function} addToCart 
     */
    constructor(vendor, parkings, dictionary, addToCart) {
        super();

        /* Initializing MainContainer */
        this.thisNode = this.create('div', 'mainContainer');

        /* Data are passed down to component hierarchy */
        this.widgetContent = new WidgetContent(vendor, parkings, dictionary, addToCart);
    }

    /**
     * @returns {Node} The whole parking widget content
     */
    render = () => {
        this.thisNode.appendChild(this.widgetContent.render());
        return this.thisNode;
    }
}

export default ParkingWidget;
