const initialState = {
    count: 0,
    mainPokes: [],
    copyMain: [],
    types: []
}

export default function reducer (state = initialState, {type, payload}) {
    switch (type) {
        case "inc": return {...state, count: state.count + 1}
        case "dec": return {...state, count: state.count - 1}
        case "getMain": return {...state, mainPokes: payload, copyMain: payload}
        case "az": 
            let pokeListAZ = [...state.mainPokes];
            pokeListAZ.sort(function(a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                     return -1
                }
                return 0;
            });
            return {...state, mainPokes: pokeListAZ}
         case "za": 
            let pokeListZA = [...state.mainPokes];
            pokeListZA.sort(function(a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return 1
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1
                }
                return 0;
            });
            return {...state, mainPokes: pokeListZA}
        case "apiOrDb":
            let pokeListAOD = [...state.copyMain];
            if (payload === "api") pokeListAOD = pokeListAOD.filter(el => typeof (el.id) === 'number');
            if (payload === "db") pokeListAOD = pokeListAOD.filter(el => typeof (el.id) !== 'number');
            if (payload === "all") pokeListAOD = [...state.copyMain];
            return {...state, mainPokes: pokeListAOD}
        case "attack":
            let pokeListAT = [...state.mainPokes];
            if (payload) pokeListAT = pokeListAT.sort((a, b) => { return a.attack - b.attack});
            if (!payload) pokeListAT = pokeListAT.sort((a, b) => { return b.attack - a.attack});
            return {...state, mainPokes: pokeListAT}
        case "getType": return {...state, types: payload}
        default: return state;
    }
}