document.getElementById("ready_button").addEventListener("click", () => {
	$('html,body').animate({
		scrollTop: $("#install").offset().top
	}, duration = 1000);
})

const accordions = document.getElementsByClassName("accordion");
for (var i = 0; i < accordions.length; i++) {
	accordions[i].addEventListener("click", () => {
		/* Toggle between adding and removing the "active" class,
		to highlight the button that controls the panel */
		this.classList.toggle("active");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
