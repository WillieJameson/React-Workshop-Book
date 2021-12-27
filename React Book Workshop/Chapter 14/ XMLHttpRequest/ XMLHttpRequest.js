// The first step is to create an instance of XMLHttpRequest object:
const xhr = new XMLHttpRequest();

// Then, to specify the type of data contained in the response, we can use the responseType property. The supported values are an empty string, arraybuffer, blob, document, JSON, and plaintext.
// To use JSON, add the property to the instance and assign the value:
xhr.responseType = 'json';

// Once we have created the instance of the XHR object, we need to set the connection to a server by using the open() method. The open() method requires two mandatory parameters, which are a method such as GET, POST, PUT, or DELETE, and the URL to send the request to:
xhr.open('POST', 'https://yourdomain.com/api/posts/new');

// If you need to set any HTTP headers, call the setRequestHeader method with the header and value. The setRequestHeader method must be called after open() but before send():
xhr.setRequestHeader('Content-Type', 'application/json');

// It's time to send a request. To send a request, we need to use the send() method with the body of the data:
// When sending data to a server, the format of the data should be a string. The JSON.stringify() method converts a JavaScript object to a string.
xhr.send(JSON.stringify({
  title: 'this is a title',
  body: 'this is body'
}));

// To get the data, we can call the load event through the standard addEventListner() API to XMLHttpRequest. We use the load event because the event is waiting for all the resources on the page is finished loading before it gets fired:

xhr.addEventListener('load', res => {
  console.log(res);
});