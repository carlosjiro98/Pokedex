import s from './Controls.module.css';
import cruz from '../../../../img/cruzeta.png'
function Controls() {
    return (
        <div className={s.mainContainer}>
            <div className={s.semiDetail}>
                <h1>SemiDetail</h1>
            </div>
            <div className={s.controls}>
                <div className={s.deco}>
                    <div className={s.deco1}></div>
                    <div className={s.deco2}></div>
                </div>

                <div className={s.filters}>
                    <div className={s.filterBtn} id={s.left}>A-Z</div>
                    <div className={s.filterBtn}>Z-A</div>
                    <div className={s.filterBtn}>ATAQUE</div>
                    <div className={s.filterBtn}>API</div>
                    <div className={s.filterBtn} id={s.right}>TIPO</div>
                </div>
                
                <div className={s.nav}>
                    <div className={s.circle}>
                        <div className={s.find}>Buscar</div>
                    </div>
                    <div className={s.circle}>
                        <div className={s.detail}>Detalle</div>
                    </div>
                    <div className={s.home}>
                        <img src={cruz} alt="cruzeta" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Controls;