"use strict";

$(document).ready(function() {
  // Weather
  $.simpleWeather({
    location: 'Venice, CA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      var html;
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
  
  // Twitter
	var twitterConfig = {
	  "id": '652693632583991296',
	  "domId": 'tweets',
	  "maxTweets": 5,
	  "enableLinks": true
	};
	twitterFetcher.fetch(twitterConfig);
	
	// Instagram
	var feed = new Instafeed({
	    get: 'user',
	    userId: 2229630812,
	    accessToken: '2229630812.467ede5.d118a7d36c84488991e3b442d5142297',
	    clientId: '0c5754c76a9d4980b69045fe77819a35',
	    template: '<a href="{{link}}"><img src="{{image}}"/><p>{{caption}}</p></a>',
	    limit: 5
	});
	feed.run();
  setTimeout(function(){$("#instafeed a").attr('target', '_blank');}, 500);
  
});
