"use strict";

$(document).ready(function() {
  // Weather feed
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
  
  // Twitter feed
	var twitterConfig = {
	  "id": '652693632583991296',
	  "domId": 'tweets',
	  "maxTweets": 4,
	  "enableLinks": true,
	  "customCallback": handleTweets
	};

	function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('tweets');
    var html = '<ul>';
    while(n < x) {
      html += '<li>' + tweets[n] + '</li><div class="clearfix"></div><hr>';
      n++;
    }
    html += '</ul>';
    element.innerHTML = html;
	}
	
	twitterFetcher.fetch(twitterConfig);
	
	// Instagram feed
	var feed = new Instafeed({
	    get: 'user',
	    userId: 2229630812,
	    accessToken: '2229630812.467ede5.d118a7d36c84488991e3b442d5142297',
	    clientId: '0c5754c76a9d4980b69045fe77819a35',
	    template: '<div class="col-md-6 col-sm-6"><a href="{{link}}"><img src="{{image}}"/><p>{{caption}}</p></a></div>',
	    limit: 10,
	    resolution: 'standard_resolution'
	});
	feed.run();
  setTimeout(function(){$("#instafeed a").attr('target', '_blank');}, 500);
  
});
