// script.js

'use strict';

var loaded = [];

function loadPage(page, success, error) {
  success = success || function () {};
  error = error || function () {};
  $.get(page + '.html', success).fail(error);
}

function togglePopup() {
  var $popup = $('#popup');
  var isHidden = $popup.is(':hidden');
  $popup.velocity({
    opacity: isHidden ? 1 : 0
  }, {
    display: isHidden ? 'block' : 'none'
  });
}

$('#buttons button').on('click', function (e) {
  var page = $(e.target).attr('data-page');
  $('#pages div').css('display', 'none');
  if (loaded.indexOf(page) === -1) {
    loadPage(page, function (data) {
      loaded.push(page);
      $('#pages').append(data);
      togglePopup();
    });
  } else {
    $('#' + page).css('display', 'block');
    togglePopup();
  }
  return false;
});

$('#close').on('click', function (e) {
  togglePopup();
  return false;
});