import Component from "../../../utils/Component";
import './style.less';

/**
 * @description Small version of the widget with just a title (hidden details)
 */
class SmallPark extends Component {
     /**
     * @constructor 
     * @param {Object} vendor 
     * @param {Object} dictionary 
     * @param {Function} toggleDetails 
     */
    constructor(vendor, dictionary, toggleDetails) {
        super();

        this.vendor = vendor;
        this.dictionary = dictionary;

        this.toggleDetails = toggleDetails;
        this.smallParkNode = this.create('div', 'smallParkContainer');
    }

    /**
     * @description This function is passed in from the parent class in order to make the user switch from small to large widget
     */
    _toggleDetails = () => {
        this.toggleDetails();
    }

    /**
     * @returns {Node} The small widget content
     */
    render() {
        const title = this.create('div', 'parkTitle');
        title.innerHTML = `${this.dictionary.bookYourParking} ${this.vendor.departureAirport}`;
        this.smallParkNode.appendChild(title);
        
        const showDetailsButton = this.create('a', 'showDetails');
        showDetailsButton.href = '/#';
        showDetailsButton.innerHTML = 'Mostra dettagli';
        showDetailsButton.onclick = this._toggleDetails;
        this.smallParkNode.appendChild(showDetailsButton);
        
        return this.smallParkNode;
    }
}

export default SmallPark;
