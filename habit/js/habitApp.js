console.log('Hello');

var $Calendar = $('section#Calendar');
var n = 0;
var colorDone = '#68B567';
var colorPending = '#B56767';
var days = [];

// var dayPiece = '<section class="dayPiece pending ' + n +' "></section>';

var getItems = function(sItem){
	 window.localStorage.getItem(sItem);
	 return JSON.parse(sItem);
};

var setItems = function(sName, sValue){

	var lsValue = JSON.stringify(sValue);
	 window.localStorage.setItems(sName, lsValue);
};


var loadDays = function(){
	for (var i = 0; i <= 30; i++){
		if(!getItems(days)){
			$Calendar.append('<section id="' + n +' " class="dayPiece pending "></section>');
			var day = new DayObject(n);
			setItems('days', day);
			n++;
		} else {
			console.log(getItems(days)); // for now
		}
	}
};

console.log(getItems(days));

var $dayPiece = $('section.dayPiece');

$dayPiece.on('click', function () {
	if($(this).hasClass('pending')){
		$(this).css('background-color', colorDone).removeClass('pending').addClass('done');
	}

	console.log('You got me');
});


var getItems = function(sItem){
	 window.localStorage.getItem(sItem);
};

var setItems = function(sName, sValue){

}

function DayObject(habitId, habitName, habitDuration) {
	this.habitID =  habitId | '';
	this.habitStatus =  "pending";
	this.habitName = habitName | '';
	this.habitDuration =  habitDuration | '';
	this.talk = function(){
		console.log(message);
	};

};

var dayOne = new DayObject('Crushing it', 'Winning');

console.log(dayOne.habitStatus);


