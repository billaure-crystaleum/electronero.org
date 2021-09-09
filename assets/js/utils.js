// globalize nested obj support
// with help from dev to: https://dev.to/flexdinesh/accessing-nested-objects-in-javascript--9m4
function getNestedObject(nestedObj, pathArr) {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  }
var UtilityToolbox = {
  getNestedObject
}















// Exports
module.exports = getNestedObject;
