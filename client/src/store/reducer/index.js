const initialState = {
    count: 1,
    mainPokes: [],
    copyMain: [],
    types: [],
    semiIndicator: "semiHome",
    pokeDetail: [],
    pokeName: [],
    searchErr: false,
    pokeCreado: []
}

export default function reducer (state = initialState, {type, payload}) {
    switch (type) {
        case "inc": return {...state, count: state.count + 1}
        case "dec": return {...state, count: 1}
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
        case "setType": 
            let pokeListTY = [...state.copyMain];
            pokeListTY = pokeListTY.filter((e)=>{
                if(e.types.find((t)=>t === payload)) return e
                return false
            })
            return {...state, mainPokes: pokeListTY}
        case "getHome": return {...state, mainPokes: state.copyMain};
        case "setSemi": return {...state, semiIndicator: payload}
        case "getDetail": return {...state, pokeDetail: payload}
        case "resGetDetail": return {...state, pokeDetail: []}
        case "getName": return {...state, pokeName: payload, mainPokes: payload, searchErr: false}
        case "searchErr": return {...state, searchErr: true}
        case "postPoke": return {...state, pokeCreado: payload}
        case "resetMain": return {...state, mainPokes: []}
        case "GetDetailCreado": return {...state, pokeDetail: state.pokeCreado}
        default: return state;
    }
}