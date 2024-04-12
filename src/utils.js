// This function takes a string containing the iframe that renders a mobile bandcamp player.
// It will replace the width value with "100%". If it cannot find the width property, it returns
// the original iframe text 
export const fixIframeWidth = (iframeCode) => {
	let widthPos = iframeCode.search("width: ");
	let pxPos = iframeCode.substring(widthPos).search("px");
	// the "px" substring should appear within 10 characters of the position of
	// substring "width"; if not, we will not edit the HTML and just render
	// what was recieved from the
	if (pxPos > 14) { 
		return iframeCode; }
	pxPos += widthPos;

	return iframeCode.substring(0, widthPos + 7) + "100%" + iframeCode.substring(pxPos + 2);
};