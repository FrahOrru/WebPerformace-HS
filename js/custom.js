(function ($) {

  "use strict";

  // NAVBAR
  $('.navbar-nav .nav-link').click(function(){
    $(".navbar-collapse").collapse('hide');
  });
  
})(window.jQuery);

import { onWebVital } from 'web-vitals';

function sendToAnalytics({ name, value, id }) {
  const body = JSON.stringify({ name, value, id });
  if (navigator.sendBeacon) {
    navigator.sendBeacon('https://your-analytics-endpoint.com/report', body);
  } else {
    fetch('https://your-analytics-endpoint.com/report', { body, method: 'POST', keepalive: true });
  }
}

onWebVital(sendToAnalytics);
