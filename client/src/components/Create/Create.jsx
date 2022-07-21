import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './Create.module.css'
import pika from '../../img/pika.gif'


function Create () {
    let types = useSelector((state) => state.types)
    let [stats, setStats] = useState({
        hp: 20,
        attack: 20,
        defense: 20,
        speed: 20,
        height: 20,
        weight: 20,
        name: "",
        image: ""
    })
    function handleOnChange (e) {
        setStats((prev)=>{
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <div className={s.mainC}>
            <form className={s.form}>
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
                                                                type="checkbox"/>  {e.name}
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