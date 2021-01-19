console.log('hello there lovely people');

function processResponse(response) {
    return response.json();
}

// Show the joke on the page:
// 1. make the Request using fetch()
const jokePromise = fetch('https://icanhazdadjoke.com', {
    headers: {
        Accept: 'application/json'
    }
})

jokePromise.then(response => {
    console.log(response);
    // let parsedResp = JSON.parse(response);
    // console.log(parsedResp);
    const pendingData = response.json();

    console.log(pendingData);
    return pendingData; // returns to the next .then()
}) // convert to JSON
.then(finishedData => {
    // data is a plain JavaScript Object
    console.log(finishedData);
    return finishedData.joke;
})
.then(theJoke => {
    console.log(theJoke);
})
.catch(err => console.log(err))
// 2. grab the .joke
// 3. render it to the page

// Alternative to use .catch() is to pass a second callback to .then()
// fetch('https://icanhazdadjoke.com', {
//     headers: {
//         Accept: 'application/json'
//     }
// })
// .then(response => response.json(), err => console.log(err))
