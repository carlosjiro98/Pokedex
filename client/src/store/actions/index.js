import axios from 'axios';

export function inc () {
    return {type: "inc"}
}
export function dec () {
    return {type: "dec"}
}

export function az () {
    return {type: "az"}
}

export function za () {
    return {type: "za"}
}

export function apiOrDb (aod) {
    return {
        type: "apiOrDb",
        payload: aod
    }
}

export function attack (ord) {
    return {
        type: "attack",
        payload: ord
    }
}
export function setType (typ) {
    return {
        type: "setType",
        payload: typ
    }
}
export function getHome (typ) {
    return {
        type: "getHome",
    }
}

export function setSemi (semi) {
    return {
        type: "setSemi",
        payload: semi,
    }
}

export function getDetail (id) {
    if (id === "reset") {
        return {
            type: "resGetDetail"
        }
    } else {
        return async (dispatch) => {
            try {
                let pokeDet = await axios.get(`http://localhost:3001/pokemons/${id}`);
                return dispatch({
                    type: "getDetail",
                    payload: pokeDet.data,
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export function getType () {
    return async (dispatch) => {
        try {
            let aTypes = await axios.get("http://localhost:3001/types");
            return dispatch({
                type: "getType",
                payload: aTypes.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getName (name) {
    return async (dispatch) => {
        try {
            let pokeName = await axios.get(`http://localhost:3001/pokemons/?name=${name}`);
            return dispatch({
                type: "getName",
                payload: pokeName.data,
            })
            
        } catch (error) {
            console.log(error);
            return dispatch({
                type: "searchErr"
            })
        }
    }
}


export function getMain () {
    return async (dispatch) => {
        try {
            let mainPokes = await axios.get("http://localhost:3001/pokemons/");
            return dispatch({
                type: "getMain",
                payload: mainPokes.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}