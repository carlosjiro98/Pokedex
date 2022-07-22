import { useState } from 'react'
import s from './SemiSearch.module.css'

import {getName} from '../../../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

function SemiSearch () {
    let dispatch = useDispatch();
    let [search, setSearch] = useState("")
    let errMess = useSelector((state)=>state.searchErr)

    function handleOnSubmit (e) {
        e.preventDefault()
        dispatch(getName(search));
    }
    function handleOnChage (e) {
        setSearch(e.target.value)
    }
    return <div className={s.mainC}>
        <div className={s.title}>
            <h3>Busca un Pokemon</h3>
        </div>
        <form onSubmit={handleOnSubmit} className={s.formx}>
            <input type="text" value={search} onChange={handleOnChage}/>
            <button>Buscar</button>
        </form>
        {errMess ? <div className={s.errAl}>
            <p>Ninguna busqueda coincide</p>
            <p>Verifica que el nombre sea exacto</p>
        </div>: <div className={s.normal}>
            <p>Las busquedas deben ser</p>
            <p>con nombre exacto</p>
        </div>}
    </div>
}
export default SemiSearch