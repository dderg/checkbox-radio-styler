function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}
function remove(node) {
    node.parentNode.removeChild(node);
}

class ElementStyler {
    constructor (element) {
        this.element = element;
        this.wrap();
    }

    wrap () {
        this.label = document.createElement('label');
        this.label.className = `js-styled js-styled_type_${this.element.getAttribute('type')}`;
        insertBefore(this.label, this.element);
        this.label.appendChild(this.element);
        this.label.appendChild(document.createElement('span'));
    }

    destroy () {
        insertBefore(this.element, this.label);
        remove(this.label);
    }
};

export class CheckboxRadioStyler{
    constructor (selector) {
        this.selector = selector;
        this.elems = new WeakSet();
    }

    init () {
        for (let element of document.querySelectorAll(this.selector)) {
            if (element.getAttribute('styled') === 'true') {
                return;
            }
            element.setAttribute('styled', true);
            let styled = new ElementStyler(element);
            this.elems.add(styled);
        }
    }

    destroy () {
        this.elems.forEach((element) => {
            element.element.removeAttribute('styled');
            element.destroy();
            this.elems.delete(element);
        });
    }
};
