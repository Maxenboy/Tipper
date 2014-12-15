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
		var rate;
		$('#answer').empty(),
		$('#questions').text('Please rate the overall service')
		switch($(this).attr('id')){
			case 'gen':
				rate = 0.1;
				break;
			case 'rand':
				rate = (Math.random() * 0.09 + 0.01).toFixed(2);
				break;
			case 'cheap':
				rate = 0.01;
				break;
		}
		$('#answer').addClass('rating'),
		$('#answer').append('<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>')
	});

});