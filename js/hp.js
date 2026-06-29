;
$(function() {
	$('a[href*=#]').click(
			function() {
				if (location.pathname.replace(/^\//, '') == this.pathname
						.replace(/^\//, '')
						&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target
							|| $('[name=' + this.hash.slice(1) + ']');
					if ($target.length) {
						var targetOffset = $target.offset().top - 50;
						$('html,body').animate({
							scrollTop : targetOffset
						}, 1000);
						return false;
					}
				}
			});

	// World Cup theme: isolated, removable homepage decoration.
	$('body').addClass('worldcup-theme');
	$('head').append('<link rel="stylesheet" href="css/worldcup.css" />');

	var $bg = $('<div class="worldcup-bg" aria-hidden="true"></div>');
	$bg.append('<div class="worldcup-confetti"></div>');
	$bg.append('<span class="worldcup-trophy-emoji">🏆</span>');

	var trophy = new Image();
	trophy.src = 'img/worldcup.png';
	trophy.alt = '';
	trophy.className = 'worldcup-trophy-img';
	trophy.onload = function() {
		$('body').addClass('has-worldcup-png');
	};
	$bg.append(trophy);

	$bg.append('<span class="worldcup-mini worldcup-mini-1">🏆</span>');
	$bg.append('<span class="worldcup-mini worldcup-mini-2">⚽</span>');
	$bg.append('<span class="worldcup-mini worldcup-mini-3">🏆</span>');
	$('body').prepend($bg);
});
