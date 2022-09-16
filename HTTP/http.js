//HTTP protocol
//foundation for data exchange on the web
//the client initates the communication by sending HTTP request
//the server responds by sending HTTP response

//HTTP Request
//request line: GET/index HTTP/1.1
//method: tells the server what operation needs to be performed
//URL: tells the server what resource is being requested (target resource)
//version: verson of the HTTP protocal being used

//Header fields
//each field takes one line and contains 2 parts (field name, field value)

//Blank line
//seperate from headers from the body of the request message
//Body
//not all http request contain body, post request contains data: send to the server and to be used to insert new resources in the server 

//Request Method
//GET: request a representation of the specified resource
//POST: submits an entity to the specified resource (create new item in database)
//PUT: replaces all current represenattions of the target resource with the request payload (updating existing resource)
//DELETE: deletes the specified resource

//HTTP Response

//Status line
//version of HTTP protocol
//status code: tells the outcome of the operation request (read bt machine)
//status phrase: read by humans

//Header Fields
//type of content
//date response generated

//blank line

//body
//payload of the response hhtml age being sent back to client 

//HTTP Status Code
/**
 * 200 Ok (GET)
 * 201 Created (PUT/POST)
 * 301 Moved Permanently (300 level for redirection purposes)
 * Client side errors
 * 400 Bad Request
 * 401 Unauthorized
 * 403 Forbidden
 * 404 Not Found
 * 500 Internal Sever Error (server side errors)
 */