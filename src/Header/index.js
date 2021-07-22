import './style.less';
import Component from '../utils/Component';

/**
 * @description This is an example class I made only to show the cart's products number
 */
class Header extends Component {
    constructor() {
        super();
        this.header = this.create('div', 'headerContainer');
        document.addEventListener('addedToCart', (event) => this.updateCart(event.detail));
    }

    /**
     * @param {string} title title of the app
     */
    setTitle = (title) => {
        const titleNode = this.create('h1', 'title');
        titleNode.textContent = title;
        this.header.appendChild(titleNode);
    }

    /**
     * @param {Array<number>} cart Array of product IDs
     */
    updateCart = (cart) => {
        const productsCounter = document.querySelector('.productsCounter');
        productsCounter.textContent = cart.length;
    }

    render = () => {
        this.setTitle('Vendors');
        const cartContainer = this.create('div', 'cartContainer');

        const cartIcon = this.create('i', 'fa', 'fa-shopping-cart', 'cartIcon');
            cartContainer.appendChild(cartIcon);
        
        const productsCounter = this.create('div', 'productsCounter');
            productsCounter.textContent = 0;
            cartContainer.appendChild(productsCounter);
        
        this.header.appendChild(cartContainer);


        return this.header;
    }
}

export default Header;
