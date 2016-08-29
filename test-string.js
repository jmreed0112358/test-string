'use strict';

// From https://mathiasbynens.be/notes/javascript-unicode#accounting-for-other-combining-marks
const regexGraphemeCluster = /([\0-\u02FF\u0370-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uDC00-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF])([\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]*)/g;

var TestString = function(rawString) {
  this.rawString = rawString;
  this.clusterArray = rawString.match(regexGraphemeCluster);
};

TestString.prototype.print = function() {
  var i = 0,
    output = '';

  for (i = 0 ; i < this.clusterArray ; i++) {
    output = output + this.clusterArray[i];
  }

  console.log(output);
};

TestString.prototype.length = function() {
  return this.clusterArray.length;
};

module.exports = TestString;