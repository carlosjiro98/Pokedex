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
export function getType () {
    return async (dispatch) => {
        try {
            let aTypes = await axios.get("http://localhost:3001/types");
            return dispatch({
                type: "getType",
                payload: aTypes,
            })
        } catch (error) {
            console.log(error);
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