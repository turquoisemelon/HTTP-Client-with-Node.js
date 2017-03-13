var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  https.get(options, function(response){
    var test = "";

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a 'data' chunck is received
    response.on('data', function (data) {
      test += data;
    });

    response.on('end', function() {
      console.log(test);
    });
  });
}

getAndPrintHTML (requestOptions);
