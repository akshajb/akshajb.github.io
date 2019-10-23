$(document).ready(function(){
    const P = new Pokedex.Pokedex();
    const pokeList = P.getPokedexByName(2).then((response)=>{
        const pokeNames = response.pokemon_entries.map(ele=>{
            return ele.pokemon_species.name;
        }) 
        
        jQuery('#pokeID').on('input', function() {
            var searchResult = new Array();
            if($(this).val().length>2){
                $('.suggestions').html('')
                pokeNames.forEach(pokemon=>{
                    if(pokemon.includes($(this).val())){
                        searchResult.push(pokemon)
                        $('.suggestions').append(
                            `<div class="sug"> ${pokemon} </div>`
                        );
                    }
                })  
            }else{
                $('.suggestions').html('')  
            }
            
            // const golduck = P.getPokemonByName("pikachu").then((response)=>{
            //      console.log(response)
            //      var imageURI = response.sprites.front_default;
            //      var image =  document.createElement('img');
            //      image.src = imageURI;
            //      image.style.height = '150px';
            //      image.style.width = '150px';
            //      $('main').append(image)
            //  })
         });
    }) 
})

