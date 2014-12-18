var index = 0;
var result = [];
var character;
var rating
var tot;
var questions = ['Please rate the overall service', 'How was the food?', 'How was the waiter/waitress?', 'How was the environment?']

$(document).ready(function(){
	$('tr').mouseenter(function(){
		$('img', this).animate({
			'max-height': '1.88em',
			'max-width': '1.88em'
		});

		$('td', this).animate({
			'font-size': '1.88em'
		});
	});

	$('tr').mouseleave(function(){
		$('img', this).animate({
			'max-height': '1.25em',
			'max-width': '1.25em'
		});

		$('td', this).animate({
			'font-size': '1em'
		});
	});

	$('#footer').children().mouseenter(function() {
		$('img', this).animate({
			'width': '5em',
			'height': '5em'
		});
	});

	$('#footer').children().mouseleave(function() {
		$('img', this).animate({
			'width': '4em',
			'height': '4em'
		});
	});

	$('tr').click(function() {
		emptyElement($('#answer'));
		nextQuestion();
		switch($(this).attr('id')){
			case 'gen':
			character = 0.1;
			break;
			case 'rand':
			character = (Math.random() * 0.09 + 0.01);
			break;
			case 'cheap':
			character = 0.01;
			break;
		}
	});

	$('body').on('click', 'label', function() {
		if (index == 1) {
			rating = parseInt($(this).attr('for'));
			emptyElement($('.detailed'));
			$('.detailed').append("<a class='leftoption' id='more'>Detailed service questions</a><a class='rightoption' id='Total amount'>To total amount</a>")
		}else{
			clickStar($(this));
		}
	});

	$('body').on('click', '.leftoption', function() {
		$('.detailed').remove()
		emptyElement($('#answer'));
		nextQuestion();
	});

	$('body').on('click', '.rightoption', function() {
		$('.detailed').remove()
		total();
		
	});

	$('body').on('click', '.tipButton', function() {
		tot = parseInt($('#tot').val());
		receipt();
	});

});

function nextQuestion(){
	var next = questions[index];
	index ++;
	if(index > questions.length){
		total();
	}else{
		$('#questions').text(next);
		createStars();
	}
}

function createStars(){
	$('#answer').append("<div class='stars'><div class='rating'></div><input type='radio' name='rating' id='5' value='5'><label for='5'></label><input type='radio' name='rating' id='4' value='4'><label for='4'></label><input type='radio' name='rating' id='3' value='3'><label for='3'></label><input type='radio' name='rating' id='2' value='2'><label for='2'></label><input type='radio' name='rating' id='1' value='1'><label for='1'></label></div>")
}

function emptyElement(element){
	element.empty();
}

function clickStar(starElement){
	result.push(parseInt(starElement.attr('for')));
	emptyElement($('#answer'))
	nextQuestion();
}

function total(){
	$('#questions').text('Please fill in the full amount of your check'),
	emptyElement($('#answer'));
	$('#answer').append("<input type='number' id='tot' min='10' autofocus><br><input type='submit' value='Tip' class='tipButton'>")
	$('#answer').css({
		'text-align': 'center',
	});
}

function receipt(){
	emptyElement($('.container')),
	$('.container').append("<div class='left'></div><div class='right'></div>")
	$('#wrapper').switchClass('container', 'result', 2000, 'easeOutBounce')
	var left = questions[0] + ':' + '<br>';
	var right= rating + '<br>';
	var choises = 0;
	if (result.length>1) {
		for (var i = 1; i < questions.length; i++) {
			left+= questions[i] + ':' + '<br>';
			right+= result[i-1] + '<br>';
			choises+= result[i-1];
		}
		var test = character*(choises/3);
		var test1 = test.toFixed(2);
		var test2 = parseFloat(test1);
		var test3 = Math.round(test2);
		var tip = (choises/3) > rating ? Math.round(parseFloat((charachter*(choises/3)).toFixed(2))) : Math.round((character*rating).toFixed(2)); 
		left+= '<br><br><br>Full amount of your check:<br>Your tip: ' + tip*100 + '%<br><br>Total:';
		var finalTot = tot+(tot*tip);
		right+='<br><br><br>' + tot + '<br>' + tot*tip + '<br><br>' + finalTot; 
	} else{

	}
	$('.left').append(left),
	$('.right').append(right),
	$('hr').remove()
}

