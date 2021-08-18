import axios from 'axios';
/**
 * @description This service is used to retrieve parks, features, vendor and dictionary info
 */
class ParkingService {
    /**
     * @constructor
     * @returns {ParkingService} a ParkingService instance
     */
    constructor() {
        if (!ParkingService.instance) {
            this.cart = [];
            ParkingService.instance = this;
        }

        return ParkingService.instance;
    }

    /**
     * @description Simulate product adding into Web App cart
     * @param {string} product the ID of the product (parking)
     */
    addToCart = (product) => {
        this.cart.push(product);
        const addToCartEvent = new CustomEvent('addedToCart', { detail: this.cart });
        document.dispatchEvent(addToCartEvent);
    };

    /**
     * @description used to fetch infos
     */
    fetchData = async () => {
        const { default: json } = await import('./../../assets/model.json')
        const fetchDataEvent = new CustomEvent('dataFetched', { detail: json });
        document.dispatchEvent(fetchDataEvent);
    };
}

const instance = new ParkingService();
Object.freeze(instance);

export default instance;
