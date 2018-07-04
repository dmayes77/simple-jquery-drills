$(document).ready(() => {
	$('form').submit(e => {
		let $btn = $('#btnSubmit');
		let $text = $('#text').val();
		if ($text.length === 0) {
			$btn.attr('disabled', true);
		} else {
			// alert($text);
			$btn.attr('disabled', false);
			e.preventDefault();
			$('<li>' + $text + '</li>').appendTo('ul');
			$('#text').val('');
		}
		// $('h2').mouseover(() => {
		// 	$('h2').css({
		// 		backgroundColor: 'yellow',
		// 		borderRadius: '20px'
		// 	});
		// 	console.log('mouseover');
		// });

		$('ul').on('click', e => {
			$(e.target).css({ backgroundColor: getRandomColor() });
		});

		$('ul').on('dblclick', e => {
			$(e.target).remove();
		});

		function getRandomColor() {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			return 'rgb(' + r + ', ' + g + ', ' + b + ')';
		}
	});
	
	$('body').append('<div></div>');
	$('div').append('<ul></ul>');
});
