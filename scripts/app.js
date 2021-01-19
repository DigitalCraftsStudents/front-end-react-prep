async function main() {
    // Show the joke on the page:
    // 1. make the Request using fetch()
    const jokePromise = fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    });
    const response = await jokePromise;
    // 2. grab the .joke
    const jokeData = await response.json();
    console.log(jokeData);
    console.log(jokeData.joke);
    // 3. render it to the page
}
main();