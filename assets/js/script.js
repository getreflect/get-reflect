window.addEventListener('load', () => {
	document.getElementById("ready_button").addEventListener("click", () => {
		$('html,body').animate({
			scrollTop: $("#install").offset().top
		}, duration = 1000);
	})
	
	const accordions = document.getElementsByClassName("accordion");
	Array.from(accordions).forEach(element => {
		element.addEventListener("click", () => {
			/* Toggle between adding and removing the "active" class,
			to highlight the button that controls the panel */
			element.classList.toggle("active");

			/* Toggle between hiding and showing the active panel */
			var panel = element.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	});	
})
