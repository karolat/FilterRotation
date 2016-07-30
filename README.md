# FilterRotation

User Experience Flow
---
1. User loads the website and is presented with a button to upload an image. The user selects a single image to upload and the image is then uploaded and placed into the center of the page.
* The user can then select different CSS filters to apply to the image using a drop down menu presented at the bottom or top of the image. A default filter should be selected in case the user does not see this step and so the user can immediately experience the rotation effect.
* Once the image is uploaded, the user will be able to rotate their device and apply the filter. The device rotation should directly affect how much of the filter is being applied.
* The user will be able to tap the screen and save the image.

Tools
---
* JavaScript
 * I'm thinking bootstrap will be the only library we need. Just to make the buttons and drop down menus look good.
 * Other than that, just plain JS should be able to do the job fine. 
 * Oh and jQuery because it's basically mandatory
* HTML
 * Just straight HTML should be fine here
* CSS
 * We can probably use LESS or SASS for this
* [Device rotation](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)
* [CSS Filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)

TODO
---
1. Use strikethrough to mark things off as done. Go down list in this order.
* Create HTML file
* Create CSS file
* Create JS file
* Image upload feature
* CSS filters feature
* Drop down menu for CSS filters
* Link device orientation to CSS filter property
* Tap to save image feature
* Test on all browsers and devices
* Figure out license to use
* Where to publish this?

![Original sketch](http://i.imgur.com/p8VShCI.jpg)
