import Component from "../../../../utils/Component";
import './style.less';

/**
 * @description List of available parkings (container)
 */
class AvailableParkings extends Component {
    /**
     * 
     * @param {Object} parkings 
     * @param {Object} dictionary 
     * @param {Function} addToCart 
     */
    constructor(parkings, dictionary, addToCart) {
        super();

        this.parkings = parkings;
        this.addToCart = addToCart;
        this.dictionary = dictionary;

        this.thisNode = this.create('ul', 'parksList');
    }

    /**
     * @description Render single parkings into the list
     */
    renderParkings = () => {
        this.parkings
            .map(park => {
                const singlePark = this.create('div', 'singlePark');
                    singlePark.onclick = () => this.addToCart(park.id);

                const parkPrice = this.create('p');
                    parkPrice.textContent = park.price;
                    singlePark.appendChild(parkPrice);
                
                const parkIndoor = this.create('p');
                    parkIndoor.textContent = park.indoor ? this.dictionary.indoorSpace : this.dictionary.outdoorSpace;
                    singlePark.appendChild(parkIndoor);

                const parkInsurance = this.create('p');
                    parkInsurance.textContent = park.insurance ? this.dictionary.insuranceIncluded : this.dictionary.insuranceExcluded;
                    singlePark.appendChild(parkInsurance);
                
                return singlePark;
            })
            .forEach(park => this.thisNode.appendChild(park));
    }

    /**
     * @returns {Node} AvailableParkings list
     */
    render = () => {
        this.renderParkings();
        return this.thisNode;
    }
}

export default AvailableParkings;