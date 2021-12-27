fetch('https://jsonplaceholder.typicode.com/posts/1')
// passing http request to the json method
  .then(function(res) {
    return res.json();
  })
  // convert to json()
  .then(function(data) {
    console.log(data);
  });
