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

	// Cinematic World Cup personal homepage hero.
	$('body').addClass('worldcup-landing');
	$('head').append('<link rel="stylesheet" href="css/worldcup-hero.css" />');
	$('head').append('<link rel="stylesheet" href="css/worldcup-layout-polish.css" />');
	$('head').append('<style id="worldcup-all-sections">body.worldcup-landing>.row:not(#worldcupHero){margin-left:0;margin-right:0;padding:22px 4% 0;background:linear-gradient(180deg,#03101f 0,#03101f 72px,#f6f8fb 72px,#f6f8fb 100%)}body.worldcup-landing .row>[class*=col-md-]{float:none;width:auto;max-width:1180px;margin-left:auto;margin-right:auto}body.worldcup-landing .panel{max-width:1180px;margin:28px auto 34px;border:1px solid rgba(214,164,42,.18);border-radius:16px;box-shadow:0 18px 42px rgba(7,24,47,.10);overflow:hidden;background:#fff}body.worldcup-landing .panel-heading{padding:18px 24px;background:linear-gradient(90deg,#06101f,#0b3d74)!important;border-bottom:3px solid #f6c94a!important}body.worldcup-landing .panel-title,body.worldcup-landing .topic{margin:0;color:#fff!important;font-size:20px;font-weight:700}body.worldcup-landing .panel-body{padding:30px 44px 34px;background:#fff!important;color:#111827;font-size:16px;line-height:1.72}body.worldcup-landing .panel-body p{margin:0 0 14px}body.worldcup-landing .panel-body ul,body.worldcup-landing .panel-body ol{margin-top:0;margin-bottom:0;padding-left:28px}body.worldcup-landing .panel-body li{margin-bottom:9px;line-height:1.62}body.worldcup-landing .panel-body a{color:#0759c9;font-weight:600}body.worldcup-landing .panel-body a:hover{color:#a87300}@media(max-width:768px){body.worldcup-landing>.row:not(#worldcupHero){padding:18px 14px 0}body.worldcup-landing .panel{margin:22px auto 28px;border-radius:12px}body.worldcup-landing .panel-body{padding:22px 22px 26px;font-size:15px;line-height:1.65}}</style>');

	$('.navbar-nav').html(
		'<li><a href="#worldcupHero" class="navbar-link">Home</a></li>' +
		'<li><a href="#about_me" class="navbar-link">About</a></li>' +
		'<li><a href="#research" class="navbar-link">Research</a></li>' +
		'<li><a href="#publications" class="navbar-link">Publications</a></li>' +
		'<li><a href="#talks" class="navbar-link">Talks</a></li>' +
		'<li><a href="#news" class="navbar-link">News</a></li>' +
		'<li><a href="#honors" class="navbar-link">Honors</a></li>' +
		'<li><a href="#students" class="navbar-link">Students</a></li>' +
		'<li><a href="mailto:qwang1@hku.hk" class="navbar-link">Contact</a></li>'
	);

	var hero = '' +
	'<div class="row" id="worldcupHero">' +
		'<div class="wc-confetti" aria-hidden="true"></div>' +
		'<div class="wc-hero-inner">' +
			'<div class="wc-copy">' +
				'<div class="wc-eyebrow">Welcome to</div>' +
				'<h1 class="wc-title">Qing Wang</h1>' +
				'<div class="wc-subtitle">Machine Learning Researcher</div>' +
				'<p class="wc-description">My research focuses on intelligent decision-making under uncertainty, including reinforcement learning, causal inference, and large language models.</p>' +
				'<div class="wc-profile-links" itemscope itemtype="https://schema.org/Person">' +
					'<a itemprop="email" href="mailto:qwang1@hku.hk">Email</a>' +
					'<a itemprop="sameAs" href="https://saasweb.hku.hk/staff/qwang" target="_blank" rel="noopener noreferrer">HKU Profile</a>' +
					'<a itemprop="sameAs" href="https://orcid.org/0000-0001-5421-5515" target="_blank" rel="me noopener noreferrer">ORCID</a>' +
					'<a itemprop="sameAs" href="https://scholar.google.com/citations?user=VHZ3VFsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>' +
					'<a itemprop="sameAs" href="https://www.linkedin.com/in/qing-wang-672b0896/" target="_blank" rel="me noopener noreferrer">LinkedIn</a>' +
				'</div>' +
				'<a class="wc-button" href="#about_me">Learn More <span>→</span></a>' +
			'</div>' +
			'<div class="wc-visual" aria-hidden="true">' +
				'<img class="wc-trophy-main" src="img/worldcup.png" alt="">' +
				'<img class="wc-small-trophy t1" src="img/worldcup.png" alt="">' +
				'<img class="wc-small-trophy t2" src="img/worldcup.png" alt="">' +
				'<img class="wc-small-trophy t3" src="img/worldcup.png" alt="">' +
				'<span class="wc-ball b1">⚽</span>' +
				'<span class="wc-ball b2">⚽</span>' +
				'<span class="wc-ball b3">⚽</span>' +
				'<span class="wc-ribbon">〰</span>' +
			'</div>' +
		'</div>' +
		'<div class="wc-cards">' +
			'<a class="wc-card" href="#research"><h3>▥ Research Interests</h3><p>Reinforcement Learning, Causal Inference, LLMs, Bandits, Sequential Decision-Making, and More.</p></a>' +
			'<a class="wc-card" href="#publications"><h3>▤ Publications</h3><p>Explore my latest research papers and publications in top-tier conferences and journals.</p></a>' +
			'<a class="wc-card" href="#talks"><h3>▤ Talks & News</h3><p>Invited talks, seminar presentations, and latest news and updates.</p></a>' +
		'</div>' +
		'<a class="wc-scroll" href="#about_me" aria-label="Scroll to About">⌄</a>' +
	'</div>';

	$('body').prepend(hero);
});
