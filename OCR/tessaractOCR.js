var Tesseract = require('tesseract.js');

/*
Only input is an image as specified below.

    Image must be:
    1) a path to a local file
    2) a Buffer instance containing a PNG or JPEG image
    3) a ImageData instance (an object containing width, height and data properties)
*/

detectText = (img, keywords, dataAnalysis, callback) => {
  Tesseract.recognize(img, { lang: "eng" })
    .catch(err => console.error(err))
    .then(result => {
      var text = result.text;
      dataAnalysis(text, keywords, callback);
    });
}

module.exports = detectText;
