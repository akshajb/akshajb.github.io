$(document).ready(function(){
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
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
                            `<div class="sug">${pokemon}</div>`
                        );
                    }
                    if(searchResult.length>0)
                        $('.suggestions').fadeIn()
                })  
            }else{
                $('.suggestions').fadeOut().html('')
            }
         });
    }) 

    $('.suggestions').click((e)=>{
        $('section').fadeOut();
        var name = $(e.target).html();
        const golduck = P.getPokemonByName(name).then((response)=>{
            var imageURI = response.sprites.front_default;
            $('.pokeImage img').attr("src",imageURI);
            $('.pokehead').html(
                `<h2>${response.name.capitalize()}</h2>`
            )
            const types = response.types.map(e=>{
                return e.type.name;
            })
            $('.type').html(types.join(","))
            $('.ability').html('')
            response.abilities.forEach(e=>{
                $('.ability').append(
                    `<li>${e.ability.name}</li>`
                )
            })
            $('.pokeInfo, .back').fadeIn();
        })
    })

    $('.back').click((e)=>{
        $('.back').fadeOut()
        $('section').fadeOut(function(){
            $('.search').fadeIn();
        });
    })
})

