import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import s from './Create.module.css'
import pika from '../../img/pika.gif'
import {postPoke, getMain, getDetail} from '../../store/actions'

function Create () {
    const history = useHistory();
    const dispatch = useDispatch()
    let types = useSelector((state) => state.types)
    let [stats, setStats] = useState({
        hp: 20,
        attack: 20,
        defense: 20,
        speed: 20,
        height: 20,
        weight: 20,
        name: "",
        image: "",
        types: []
    })
    function handleOnChange (e) {
        setStats((prev)=>{
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    function handleCheck (e) {
        //!e.target.checked ? arr = arr.filter((n)=> n!== e.target.name) : arr.push(e.target.name)
        if (e.target.checked) {
            setStats((prev)=>{
                return {
                    ...prev,
                    types: [...stats.types, e.target.name]
                }
            })
        }
        if(!e.target.checked) {
            setStats((prev)=>{
                return {
                    ...prev,
                    types: stats.types.filter((t)=>t!==e.target.name)
                }
            })
        }
        
    }
    function validate () {
        if(!stats.name){
            alert("Ingrese un nombre");
            return false
        } else if(!/^[a-zA-Z0-9-.]+$/.test(stats.name)){
            alert("Solo se permiten letras , numeros, puntos y guiones")
            return false
        }
        if(!stats.image){
            alert("Ingrese un una url");
            return false
        } else if(!/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(stats.image)){
            alert("Ingresa una URL valida")
            return false
        }
        if(stats.types.length===0){
            alert("Selecciona al menos 1 tipo y hasta 3");
            return false
        } else if(stats.types.length>3){
            alert("Deben ser menos de 3 tipos")
            return false
        }
        return true
    }
    function handleOnSubmit (e) {
        e.preventDefault();
        if(validate()){
            dispatch(postPoke(stats))
            .then(()=>{
                dispatch(getDetail("creado"));
            })
            dispatch(getMain());
            history.push('/home/detail')
        }
    }
    return (
        <div className={s.mainC}>
            <form className={s.form} onSubmit={handleOnSubmit}>
                <div className={s.txtRange}>
                    <div className={s.nameImg}>
                        <div>
                            <p>Nombre</p>
                            <input type="text" name="name" value={stats.name} onChange={handleOnChange}/>
                        </div>
                        <div>
                            <p>imagen</p>
                            <input type="text" name="image" value={stats.image} onChange={handleOnChange}/>
                        </div>
                    </div>
                    <div className={s.range}>
                        <div className={s.alRange}>
                            <p>Vida</p>
                            <input type="range" min="1" max="150" name="hp" onChange={handleOnChange}/><p>{stats.hp}</p>
                        </div>
                        <div className={s.alRange}>
                            <p>Ataque</p>
                            <input type="range" min="1" max="150" name="attack" onChange={handleOnChange}/><p>{stats.attack}</p>
                        </div>
                        <div className={s.alRange}>
                            <p>Defensa</p>
                            <input type="range" min="1" max="150" name="defense" onChange={handleOnChange}/><p>{stats.defense}</p>
                        </div>
                        <div className={s.alRange}>
                            <p>Velocidad</p>
                            <input type="range" min="1" max="150" name="speed" onChange={handleOnChange}/><p>{stats.speed}</p>
                        </div>
                        <div className={s.alRange}>
                            <p>Altura</p>
                            <input type="range" min="1" max="150" name="height" onChange={handleOnChange}/><p>{stats.height}</p>
                        </div>
                        <div className={s.alRange}>
                            <p>Peso</p>
                            <input type="range" min="1" max="150" name="weight" onChange={handleOnChange}/><p>{stats.weight}</p>
                        </div>
                    </div>
                </div>

                <div className={s.typesCreate}>
                    <p>Tipo:</p>
                    <div className={s.typesC}>
                        {types.length>0 ? types.map((e)=><div key={e.id}>
                                                            <input 
                                                                type="checkbox"
                                                                name={e.name}
                                                                onChange={handleCheck}/>  {e.name}
                                                            </div>) : "Cargando Tipos ..."
                        }
                    </div>
                    <div>
                        <button>Crear</button>
                    </div>
                </div>
                
                
            </form>

            <div className={s.gifHome}>
                <div className={s.pikaGif}>
                    <img src={pika} alt="pika" />
                </div>
                <Link to='/home'>
                    <button>Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Create;