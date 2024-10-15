function my_fetch(url) {
    fetch(url)
    .then(response => response.json())  
    .then(data => console.log(data))    
}
my_fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528');
