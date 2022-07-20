
function mainRouteParser (pokeDatos) {
    let pokeInstance = {}
    if(typeof(pokeDatos.id) === "number"){
        let types = pokeDatos.types.map((e) => e.type.name)
        let stats = pokeDatos.stats.map((e)=>{
            let name = e.stat.name
            return {
                name: name,
                base: e.base_stat
            }
        })
        pokeInstance = {
            id: pokeDatos.id,
            image: pokeDatos.sprites.other.dream_world.front_default || "no hay imagen",//pokeDatos.sprites.front_default,
            name: pokeDatos.name,
            attack: stats.find((e)=>e.name === "attack").base,
            types: types
        }
    } else {
        let types = pokeDatos.types.map((e) => e.name)
        pokeInstance = {
            id: pokeDatos.id,
            image: pokeDatos.image || "no hay imagen",//pokeDatos.sprites.front_default,
            name: pokeDatos.name,
            attack: pokeDatos.attack,
            types: types
        }
    }
    return pokeInstance
}

module.exports = mainRouteParser