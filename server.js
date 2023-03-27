//loads http module
var http = require('http');
//creates http server
http.createServer((request,response) => {
	//tells browser server status is okay
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	
	//write announced text to body of page
	response.write('Serve status okay. \n'); 
	
	//tells server all response headers have been sent
	response.end(); 
	
	
}).listen(1337); //tells server what port to be on 