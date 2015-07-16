$(window.document).ready(function(){
	"use strict";

	var color = 'white';
	var colors = 'red blue green yellow white purple black';
	
	var dragging = true;

	$('.box').on('mouseover', function() {
		$(this).removeClass(colors);
		if (dragging) {
			$(this).addClass(color);	
		}
	});

	$('.box').on('dblclick', function() {  //I disabled this cuz 
 	   	$(this).removeClass(colors);	  //it lags the page bad
 	 });

	$('#reset').on('click', function() {
  		$('.box').removeClass(colors);
  	});

//pallette selectors

  	$('#red').on('click', function() {
    	color = 'red';
  	});
  	$('#blue').on('click', function() {
    	color = 'blue';
  	});

  	$('#green').on('click', function() {
    	color = 'green';
  	});

  	$('#yellow').on('click', function() {
    	color = 'yellow';
  	});

  	$('#purple').on('click', function() {
    	color = 'purple';
  	});

  	$('#black').on('click', function() {
    	color = 'black';
  	});

  	$('#white').on('click', function() {
    	color = 'white';
  	});


});

//TESTING AREA

// $('.box').on('click', function() {
// 	$('.box').on('mouseover', function() {
// 		$(this).addClass(color);		
// 	});
// });

// $('.box'.toggle(((this).on('mousedown', function() {
// 	$(this).on('mouseover', function() {
// 		$(this).addClass(color);
// 	})), ((this).mouseup
// });


// $('.box').on('mouseover', function() {
// 	if ($(this).mouseover) { 
// 		function() {
// 			$(this).addClass(color);
// 		}
// 	})
// });

// var isDragging = false;
// $("a")
// .mousedown(function() {
//     isDragging = false;
// })
// .mousemove(function() {
//     isDragging = true;
//  })
// .mouseup(function() {
//     var wasDragging = isDragging;
//     isDragging = false;
//     if (!wasDragging) {
//         $(this).addClass(color);
//     }
// });




//THESE ARE THE VERSIONS THAT SHOULD WORK

// var dragging = false; 

// $('.box').on('mousedown', function(){
// 	var dragging = true;
// })
// $('.box').on('mouseover', function() {
// 	if(dragging) {
// 		$(this).addClass(color);
// 	}
// })
// $('.box').on('mouseup', function(){
// 	var dragging = false;
// })


// var dragging = false;

// 	$('.box').toggle(	
// 		$('.box').on('mousedown', function(){
// 			var dragging = true;
// 		}), 
// 		$('.box').on('mouseover', function() {
// 			if(dragging) {
// 				$(this).addClass(color);
// 			}
// 		}), 
// 		$('.box').on('mouseup', function(){
// 			var dragging = false;
// 		});
// 	);