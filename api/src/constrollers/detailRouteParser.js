
function mainRouteParser (pokeDatos) {
    let types = pokeDatos.types.map((e) => e.type.name)
    let stats = pokeDatos.stats.map((e)=>{
        let name = e.stat.name
        return {
            name: name,
            base: e.base_stat
        }
    })

    let pokeInstance = {
        image: pokeDatos.sprites.other.dream_world.front_default || "no hay imagen",//pokeDatos.sprites.front_default,
        name: pokeDatos.name,
        types: types,
        id: pokeDatos.id,
        height: pokeDatos.height,
        weight: pokeDatos.weight,
        hp: stats.find((e)=>e.name === "hp").base,
        attack: stats.find((e)=>e.name === "attack").base,
        defense: stats.find((e)=>e.name === "defense").base,
        speed: stats.find((e)=>e.name === "speed").base

    }
    return pokeInstance
}

module.exports = mainRouteParser