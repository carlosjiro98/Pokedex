const {Pokemon, Type} = require('../db');

async function pokeDbCreate (poke) {
    let {name, hp, attack, defense, speed, height, weight, image, types} = poke;

    try {
        let [poke, created] = await Pokemon.findOrCreate({ //cambiar la x
            where: {name: name},
            defaults: {
                image,
                name, 
                hp, 
                attack, 
                defense, 
                speed, 
                height, 
                weight,
            }
        });
        
        if(!created) {
            return "pokemon ya existente";
        } else {

            let typeNames = types.map((g) => g.toLowerCase());
            let typeRes = await Type.findAll({
                where: {name: typeNames}
            });

            await poke.addType(typeRes)

            return await Pokemon.findOne({
                where: { name: name },
                include: Type
            });
            //return typeRes
        }
        
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = pokeDbCreate;

/* 
[ ] Pokemon con las siguientes propiedades:
ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
Nombre *
Vida
Ataque
Defensa
Velocidad
Altura
Peso
[ ] Tipo con las siguientes propiedades:
ID
Nombre
*/