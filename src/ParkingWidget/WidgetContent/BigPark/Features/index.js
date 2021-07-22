import Component from "../../../../utils/Component";
import './style.less';

/**
 * @description Represents the features list
 */
class Features extends Component {
    /**
     * @constructor
     * @param {Array} features 
     */
    constructor(features) {
        super();
        this.features = features;
        this.thisNode = this.create('ul', 'featuresList');
    }

    /**
     * @description Renders a list of features looping on features array
     */
    renderFeature = () => {
        this.features
            .map(feature => {
                const singleFeature = this.create('li', 'singleFeature');
                const featureIcon = this.create('span', 'fa', 'fa-check', 'featureIcon');
                singleFeature.appendChild(featureIcon);

                const featureText = this.create('p');
                featureText.textContent = feature;
                singleFeature.appendChild(featureText);
                return singleFeature;
            })
            .forEach(featureElement => this.thisNode.appendChild(featureElement))
    }

    /**
     * @returns {Node} Features list
     */
    render = () => {
        this.renderFeature();
        return this.thisNode;
    }
}

export default Features;