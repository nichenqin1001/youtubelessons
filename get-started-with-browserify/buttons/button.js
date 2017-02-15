var $ = require('jquery');

var button = $('<button/>').html('click me').on('click', function () {
  alert('hello gulp');
});

module.exports = button;