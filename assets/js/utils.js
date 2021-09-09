// globalize nested obj support
// with help from dev to: https://dev.to/flexdinesh/accessing-nested-objects-in-javascript--9m4

var UtilityToolbox = {
  getNestedObject: function getNestedObject(nestedObj, pathArr) {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  }
}


// Exports
module.exports = UtilityToolbox;
