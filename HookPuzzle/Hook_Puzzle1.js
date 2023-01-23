$(".menu-ctrl").on('click', function() {
	$(".desc").toggleClass("hidden");
	$(this).toggleClass("flip");
	$(".menu-ct").toggleClass("menu-open");
})