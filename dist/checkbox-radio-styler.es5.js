'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}
function remove(node) {
    node.parentNode.removeChild(node);
}

var ElementStyler = (function () {
    function ElementStyler(element) {
        _classCallCheck(this, ElementStyler);

        this.element = element;
        this.wrap();
    }

    _createClass(ElementStyler, [{
        key: 'wrap',
        value: function wrap() {
            this.label = document.createElement('label');
            this.label.className = 'js-styled js-styled_type_' + this.element.getAttribute('type');
            insertBefore(this.label, this.element);
            this.label.appendChild(this.element);
            this.label.appendChild(document.createElement('span'));
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            insertBefore(this.element, this.label);
            remove(this.label);
        }
    }]);

    return ElementStyler;
})();

;

var CheckboxRadioStyler = (function () {
    function CheckboxRadioStyler(selector) {
        _classCallCheck(this, CheckboxRadioStyler);

        this.selector = selector;
        this.elems = new WeakSet();
    }

    _createClass(CheckboxRadioStyler, [{
        key: 'init',
        value: function init() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = document.querySelectorAll(this.selector)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var element = _step.value;

                    if (element.getAttribute('styled') === 'true') {
                        return;
                    }
                    element.setAttribute('styled', true);
                    var styled = new ElementStyler(element);
                    this.elems.add(styled);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            var _this = this;

            this.elems.forEach(function (element) {
                element.element.removeAttribute('styled');
                element.destroy();
                _this.elems['delete'](element);
            });
        }
    }]);

    return CheckboxRadioStyler;
})();

exports.CheckboxRadioStyler = CheckboxRadioStyler;
;