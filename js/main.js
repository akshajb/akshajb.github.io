$(document).ready(function(){
    const P = new Pokedex.Pokedex();
    const golduck = P.getPokemonByName(1).then((response)=>{
        console.log(response)
        var imageURI = response.sprites.front_default;
        var image =  document.createElement('img');
        image.src = imageURI;
        image.style.height = '300px';
        image.style.width = '300px';
        $('main').append(image)
    })  
})