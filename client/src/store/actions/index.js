import { POKES } from "./actions-types";
import axios from 'axios'

export function getPokes () {
    return async (dispatch) => {
        try {
            const gens = await axios.get('http://localhost:3001/pokemons')
            return dispatch({
                type: POKES,
                payload: gens.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}
