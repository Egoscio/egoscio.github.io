'use strict';

// script.js

function loadPage(page, success, error) {
  success = success || function () {};
  error = error || function () {};
  $.get(page + '.html', success).fail(error);
}