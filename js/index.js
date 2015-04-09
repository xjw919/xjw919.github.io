$(document).ready(function() {
	$('#pagepiling').pagepiling({
		sectionsColor: ['#4BBFC3', '#22C3AA', '#4BBFC3', '#22C3AA', '#4BBFC3', '#22C3AA', '#4BBFC3'],
		loopTop: true,
		loopBottom: true,
		direction: 'vertical',
		anchors: ['home', 'enducation', 'project', 'technology', 'award', 'activity', 'qualification'],
    	menu: '#myMenu'
	});
});