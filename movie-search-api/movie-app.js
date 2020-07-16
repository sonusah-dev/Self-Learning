const express = require('express');
const app = express();
// responsible for calling API's
const api = require('axios');
// setting up view engine as ejs file extention
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    // rendering search.ejs file from view to accept search query
    res.render("search");
});

app.get('/apiresult', (req, res) => {
    // storing form data to variable
    var query = req.query.search;
    // api request url here we are concatinating search request
    var url = 'http://www.omdbapi.com/?apikey=9aeadfd2&s=' + query;

    api.get(url)
        // promise for response for api call
        .then((response) => {
            // res.send(response.data);
            // res.send(response.data.Ratings[0].Source);
            res.render('home', { response: response.data });
        })
        // promise if some error occurs
        .catch((error) => {
            // handling error if something went wrong
            console.log(error);
        });
});

// Port information where our server is running
app.listen(3000, () => {
    console.log('App is listening to port:3000');
});