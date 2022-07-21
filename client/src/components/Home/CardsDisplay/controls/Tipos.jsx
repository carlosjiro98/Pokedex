import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from './Tipos.module.css' 
import {setType} from '../../../../store/actions'

function Tipos () {
    let dispatch = useDispatch();
    let types = useSelector((state) => state.types);
    let [tipo, setTipo] = useState("normal")

    function handleOnSub (e) {
        e.preventDefault();
        console.log(tipo);
        dispatch(setType(tipo));
    }
    function handleOnCh (e) {
        e.preventDefault();
        console.log(e.target.value);
        setTipo(e.target.value);
    }
    return (<>
        <form className={s.mainC} onSubmit={handleOnSub}>
            {
            types.length>0 ? types.map((e)=><div key={e.id}>
                                                <input 
                                                    type="radio" 
                                                    name="type" 
                                                    id={e.name}
                                                    value={e.name}
                                                    checked={tipo===e.name?true:false}
                                                    onChange={handleOnCh}/>  {e.name}
                                            </div>) : "Cargando Tipos ..."
            }
            <button>Filtrar</button>
        </form>
        </>
    )
}

export default Tipos;