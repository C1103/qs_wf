(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// 鍞竴璺彛 entry
var m = require('./module.js');
var m2 = require('./module2.js');
console.log(m, m2);
},{"./module.js":2,"./module2.js":3}],2:[function(require,module,exports){
// const func = function() {}
// var m = 3;
// module.exports = m;
module.exports = 'It works from modules.js';
},{}],3:[function(require,module,exports){
module.exports = 'It works from modules2.js';
},{}]},{},[1]);
