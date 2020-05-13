


var link = document.querySelector (".program-modal");
		
		var wind = document.querySelector (".program-item1");
		/*var popup = document.querySelector (".search");*/
		var rewind = document.querySelector (".program-item2");
		link.addEventListener ("click" , function (evt) {
		evt.preventDefault();
		wind.classList.add ("program-item2");
	});
        rewind.addEventListener ("click" , function (evt) {
		evt.preventDefault();
		wind.classList.remove ("program-item2");
	});