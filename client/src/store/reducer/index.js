import { POKES } from '../actions/actions-types'

const initiaState = {
    pokes: [], // List of Pokes
}

export default function reducer (state = initiaState, {type, payload}) {
    switch(type){
        case POKES: return {...state, pokes: payload}
        default: return state
    }
}