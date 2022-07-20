import { useSelector } from "react-redux";

function Tipos () {
    let types = useSelector((state) => state.types);
    return (
        <div>
            <h1>Tipos</h1>
            {
                types.length>0 ? types.map((e)=><div>{e.name}</div>) : "Cargando"
            }
        </div>
    )
}

export default Tipos;