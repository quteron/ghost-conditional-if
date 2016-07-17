'use strict';

/**
 * Run 'if' statement based on the specified expression
 * @param {string} expression to be testified
 * @param {object} options hash contains a property named fn to invoke a normal Handlebars template
 * @return {string}
 */
function cif(expression, options) {
    var fn = function(){}, result;

    try {
        fn = Function.apply(this, ["window", "return " + expression + " ;"]);
    } catch (e) {
        console.warn("{{cif " + expression + "}} has invalid javascript.", e);
    }

    try {
        result = fn.call(this, window);
    } catch (e) {
        console.warn("{{cif " + expression + "}} throws an exception.", e);
    }

    return result ? options.fn(this) : options.inverse(this);
}

module.exports = cif;