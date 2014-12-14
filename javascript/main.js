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
});