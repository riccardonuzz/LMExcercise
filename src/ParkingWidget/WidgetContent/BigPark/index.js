import Component from "../../../utils/Component";
import './style.less';
import Features from "./Features";
import AvailableParkings from "./AvailableParkings";

/**
 * This class represents the widget when user clicks on 'Show Details' button
 * it allows to see all parking details
 */
class BigPark extends Component {
    /**
     * @constructor
     * @param {Object} vendor 
     * @param {Object} dictionary 
     * @param {Array} parkings 
     * @param {Function} toggleDetails 
     * @param {Function} addToCart 
     */
    constructor(vendor, dictionary, parkings, toggleDetails, addToCart) {
        super();

        this.thisNode = this.create('div', 'bigParkContainer');

        this.vendor = vendor;
        this.dictionary = dictionary;
        this.toggleDetails = toggleDetails;

        this.availableParkings = new AvailableParkings(parkings, dictionary, addToCart);
        this.features = new Features(this.vendor.features);
    }

    /**
     * toggles from small widget to large widget
     */
    _toggleDetails = () => {
        document.querySelector('.bigParkContainer').classList.add('bigParkClosing');
        setTimeout(() => {
            this.toggleDetails();
        }, 500);
    }

    /**
     * renders content of large widget
     * @returns {Node} the constructed HTML Node with large widget's content
     */
    render = () => {
        const title = this.create('div', 'parkTitle');
            title.innerHTML = `${this.dictionary.bookYourParking} ${this.vendor.departureAirport}`;
            this.thisNode.appendChild(title);
    
        const mainContainer = this.create('div', 'parkContainer');

            const firstColumn = this.create('div', 'firstColumn');
                const image = this.create('img', 'parkImage');
                    image.src = this.vendor.map;
                    firstColumn.appendChild(image);
                mainContainer.appendChild(firstColumn);

            
            const secondColumn = this.create('div', 'secondColumn');
                const featuresTitle = this.create('p', 'featuresTitle');
                    featuresTitle.textContent = this.dictionary.featuresTitle;
                    secondColumn.appendChild(featuresTitle);

                secondColumn.appendChild(this.features.render());
                mainContainer.appendChild(secondColumn);

            const thirdColumn = this.create('div', 'thirdColumn');
                thirdColumn.appendChild(this.availableParkings.render());
                mainContainer.appendChild(thirdColumn);
            
            this.thisNode.appendChild(mainContainer);
        
        const hr = this.create('hr', 'separationLine');
            this.thisNode.appendChild(hr);

        const showDetailsContainer = this.create('div', 'hideDetails');
            const showDetailsButton = this.create('a');
                showDetailsButton.href = '#';
                showDetailsButton.textContent = 'Nascondi dettagli';
                showDetailsButton.onclick = this._toggleDetails;
                showDetailsContainer.appendChild(showDetailsButton);
                this.thisNode.appendChild(showDetailsContainer);
        
        
        return this.thisNode;
    }
}

export default BigPark;