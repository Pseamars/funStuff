//Create Bob
var randomResponse = ["Whatever", "Go Away!", "No one understands me!", "I'm so happy!", "Can I borrow some money?"]

var bob = new Object (); 
bob.answer = "Sure"; 
bob.relax = "Whoa, chll out!"; 
bob.moody = "Fine. Be that way!"; 
bob.indifferent = randomResponse[Math.round(Math.random()*(randomResponse.length-1))]; //This works, but I'd like to figure out how to change it without having 			to refresh the page.


//"Whatever"; 


divOutput = document.getElementById('divOutput');
// 	divOutput.innerHTML = response;

$("#silent").click(function () {
	return divOutput.innerHTML = bob.moody;
	// alert(bob.moody);
});

$("#yell").click(function () {
	return divOutput.innerHTML =bob.relax;
	// alert(bob.relax);
});

$("#question").click(function () {
	return divOutput.innerHTML =bob.answer;
	// alert(bob.answer);
});

$("#userInput").click(function(){
	prompt("What would you like to tell Bob?"); 
	return divOutput.innerHTML = bob.indifferent;
	// alert(bob.indifferent);
})

// function bobResponds () {
	
// 	silent = document.getElementById('silent'); 
// 	yell = document.getElementById('yell'); 
// 	question = document.getElementById('question');
// 	userInput = document.getElementById('userInput');

// 	var response = function () {
// 		if ("#silent") {
// 			return bob.moody;
// 		} else if ("#yell"){
// 			return bob.relax;
// 		} else if ("#question"){
// 			return bob.answer;
// 		} else{
// 			return bob.indifferent;
// 		}
// 	};

// 	divOutput = document.getElementById('divOutput');
// 	divOutput.innerHTML = response; 
// };





// var silent = "silent" ; 
// var question = "question"; 
// var yell = "YELL";

// var respondToBob = prompt("Hey, It's Bob"); 

// //This worked -  
// function talkToBob () {	
// 	switch (respondToBob) {
// 		case silent: 
// 			return  bob.moody; 
// 			break; 
// 		case question:
// 			return  bob.answer; 
// 			break; 
// 		case yell:
// 			return  bob.relax; 
// 			break; 
// 		default: 
// 			return  bob.indifferent;		
// }};


//  function talkToBob (respondToBob) {

//  	if(respondToBob === silent){
//  		return bob.moody; 
//  	}
//  	else if (respondToBob === question){
//  		return bob.answer;
//  	}
//  	else if (respondToBob === yell){
//  		return bob.relax; 
//  	}
// 	else{
// 		return bob.indifferent;
// 	};
// };
// var bobResponds = alert(talkToBob());




//Create Interaction

//Bob answers 'Sure.' if you ask him a question.

//He answers 'Whoa, chill out!' if you yell at him.

//He says 'Fine. Be that way!' if you address him without actually saying
//anything.


//He answers 'Whatever.' to anything else.