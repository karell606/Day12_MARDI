function check_route(url) {
    fetch(url)
    .then(response => {
        if (response.ok) {
            console.log("all is good");
        } else {
            console.log("shit happens"); 
        }
    })
    .catch(() => {
        console.log("shit happens");
    });
}
check_route('https://v2.jokeapi.dev/');
