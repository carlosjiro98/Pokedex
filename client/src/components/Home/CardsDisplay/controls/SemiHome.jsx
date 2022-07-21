import s from './SemiHome.module.css' 
import pika from '../../../../img/pika.png'

function SemiHome () {

    return <div className={s.mainC}>
    <div className={s.imgWel}>
        <div className={s.wel}>
            <h2>¡Bienvenido!</h2>
        </div>
        <div className={s.pika}>
            <img src={pika} alt="welcome" />
        </div>
    </div>
    
    <div className={s.indi}>
        <h4>Clikea un pokemon para conocelo</h4>
        <h4>Usa los controles para filtrar y navegar</h4>
    </div>
    </div>
}

export default SemiHome;