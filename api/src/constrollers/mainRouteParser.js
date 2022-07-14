
function mainRouteParser (pokeDatos) {
    let pokeInstance = {}
    if(typeof(pokeDatos.id) === "number"){
        let types = pokeDatos.types.map((e) => e.type.name)
        pokeInstance = {
            image: pokeDatos.sprites.other.dream_world.front_default || "no hay imagen",//pokeDatos.sprites.front_default,
            name: pokeDatos.name,
            types: types
        }
    } else {
        let types = pokeDatos.types.map((e) => e.name)
        pokeInstance = {
            image: pokeDatos.image || "no hay imagen",//pokeDatos.sprites.front_default,
            name: pokeDatos.name,
            types: types
        }
    }
    return pokeInstance
}

module.exports = mainRouteParser