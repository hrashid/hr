/**
 * @file
 * Appearance settings.
 */
(function ($, Drupal) {
  Drupal.behaviors.zakiBehaviours = {
    attach: function () {
      var $grid = $('.view-photo-set .view-content').imagesLoaded( function() {
			  // init Masonry after all images have loaded
			  $grid.masonry({
			    // options...
			    itemSelector: '.grid-item',
				  columnWidth: 390,
				  gutter: 10,
  				isFitWidth: true
			  });
			});

			//Captions on Blog Images
		 	$(".view-photo-set img").each(function(i) {
		 		var imgwidth = $(this).width() ? $(this).width() : false;
		    var captiontext = $(this).attr('title');
		    if(captiontext){
		    	$(this).parent().append("<span style=\"width:"+imgwidth+"px\" class=\"blog-image-caption\">" + captiontext + "</span>");
		    }
		 	});

		 	$('.toggle-menu').jPushMenu();
		 	$('.toggle-menu').click(function(){
				$(this).toggleClass('open');
			});

    }
  };
}(jQuery, Drupal));



// (function ($, Drupal) {
//   Drupal.behaviors.zakiMapBehaviours = {
//     attach: function () {
// 			// if HTML DOM Element that contains the map is found...
// 			if (document.getElementById('map-canvas')){
			 
// 			 	var geolocation_latlng = $(".geolocation-latlng").html().split(/, ?/);
// 			 	var latLng = new google.maps.LatLng(parseFloat(geolocation_latlng[0]), parseFloat(geolocation_latlng[1])),
// 		          markerIcon = {
// 		            url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
// 		            scaledSize: new google.maps.Size(60, 60),
// 		    				origin: new google.maps.Point(0, 0),
// 		    				anchor: new google.maps.Point(20,40)
// 		          };
			  
// 			    var mapOptions = {
// 			      zoom: 10,
// 			      center: latLng,
// 			      mapTypeId: google.maps.MapTypeId.ROADMAP
// 			    };
			  
// 			    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

// 			    var markerLabel = 'GO!';

// 			    var marker = new MarkerWithLabel({
// 			      map: map,
// 			      animation: google.maps.Animation.DROP,
// 			      position: latLng,
// 			      icon: markerIcon,
// 			      label: markerLabel,
// 			        labelContent: markerLabel,
// 						  labelAnchor: new google.maps.Point(18, 12),
// 						  labelClass: "my-custom-class-for-label", // your desired CSS class
// 						  labelInBackground: true
// 			    });
// 			}

//     }
//   };
// }(jQuery, Drupal));