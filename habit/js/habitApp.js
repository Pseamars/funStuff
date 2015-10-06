console.log('Hello');

var $Calendar = $('section#Calendar');
var n = 0;
var colorDone = '#68B567';
var colorPending = '#B56767';

// var dayPiece = '<section class="dayPiece pending ' + n +' "></section>';

for (var i = 0; i <= 30; i++){
	$Calendar.append('<section id="' + n +' " class="dayPiece pending "></section>');
	n++;
	console.log(n);
}

var $dayPiece = $('section.dayPiece');

$dayPiece.on('click', function () {
	if($(this).hasClass('pending')){
		$(this).css('background-color', colorDone).removeClass('pending').addClass('done');
	}

	console.log('You got me');
});

