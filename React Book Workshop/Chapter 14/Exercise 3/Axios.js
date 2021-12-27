axios.get('https://jsonplaceholder.typicode.com/posts/1').then(function(res) {
  // automate convert to json object
  console.log(res.data);
});