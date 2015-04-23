$(document).ready(function(){
	$('#fullpage').fullpage({
		anchors: ['home', 'conoce', 'aprende', 'preguntas'],
		verticalCentered: false,
		slidesNavigation: true,
		controlArrows: true,
		loopHorizontal: false,
		easingcss3: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
	})
})