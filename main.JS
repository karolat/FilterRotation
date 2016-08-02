(function(){
	"use strict";

	$('.image-uploader')[0].addEventListener('change', fileUploadEventHandler, false);
})(); // Use an immediately invoked function to set the event listener


function fileUploadEventHandler(event) {
	'use strict';

	var file = event.target.files[0]; // Grab the file
	if (file.type.match('image.*')) { // Validate
		var reader = new FileReader(), mainImage = $('.main-image')[0], uploadForm = $('.image-uploader')[0];
		reader.onload = (function uploadHandler(readerFile) { // Closure to capture the file information
			return e => {	mainImage.setAttribute('src', e.target.result)}; // Set image
		})(file); // Send file into uploadHandler function
		reader.readAsDataURL(file);
		mainImage.style.visibility = 'visible';
		uploadForm.style.visibility = 'hidden';
	}
}