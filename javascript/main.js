var index = 0;
var result = [];

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
		var character;
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
		localStorage.setItem('character',JSON.stringify(character));
	});

	$('body').on('click', 'label', function() {
		if (index == 1) {
			var rating = parseInt($(this).attr('for'));
			localStorage.setItem('rating', JSON.stringify(rating));
			emptyElement($('.detailed'));
			$('.detailed').append("<a class='leftoption' id='more'>Detailed service questions</a><a class='rightoption' id='Total amount'>To total amount</a>")
		}else{
			clickStar($(this));
		}
	});

	$('body').on('click', '.leftoption', function() {
		emptyElement($('.detailed'));
		emptyElement($('#answer'));
		nextQuestion();
	});

	$('body').on('click', '.rightoption', function() {
		receipt();
		
	});

});

function nextQuestion(){
	var questions = ['Please rate the overall service', 'How was the food?', 'How was the waiter/waitress?', 'How was the environment?']
	var next = questions[index];
	index ++;
	if(index > questions.length){
		receipt();
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
	result.push(starElement.attr('for'));
	emptyElement($('#questions')),
	emptyElement($('#answer'))
	nextQuestion();
}

function receipt(){
	emptyElement($('#questions')),
	emptyElement($('#answer'))
}

