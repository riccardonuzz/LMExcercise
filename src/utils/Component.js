/**
 * @description Utility class used to quickly creating DOM element with multiple classes
 */
class Component {
    /**
     * 
     * @param {string} tag element to create 
     * @param  {...string} classes array of classes to apply on the element 
     * @returns {Node} just created element
     */
    create(tag, ...classes) {
        const newElement = document.createElement(tag);
        classes.forEach(cl => newElement.classList.add(cl));
        return newElement;
    }
}

export default Component;