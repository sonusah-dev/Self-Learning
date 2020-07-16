// Getting npm package axios
const axios = require("axios").default;

// Make a request for a user with a given ID
axios.get('https://my-json-server.typicode.com/typicode/demo/db')
    .then((response) => {
        // handle success
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
    })
    .catch((error) => {
        // handle error
        console.log(error);
    })
    .finally(() => {
        // always executed
        console.log('This section is always invoked');
    });