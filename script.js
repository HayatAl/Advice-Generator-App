fetchRandomQuote();
function fetchRandomQuote() {
  axios
    .get("https://api.adviceslip.com/advice")
    .then(function (response) {
      // handle success
      let quite = document.getElementById("quite");

      let quiteApi = response.data.slip.advice;
      console.log(quiteApi);
      quite.innerHTML = quiteApi;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  // Implementation for fetching a random quote
}
