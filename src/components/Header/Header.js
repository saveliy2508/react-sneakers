import s from "./header.module.scss";
import {NavLink} from 'react-router-dom'

function Header(props) {
    return (
        <header className={s.header}>
            <NavLink to='/' className={s.navLink}>
                <div className={s.headerLeft}>
                    <img src='./img/logo.svg'/>
                    <div className={s.text}>
                        <p className={s.title}>REACT SNEAKERS</p>
                        <p className={s.slogan}>Лучший магазин кроссовок</p>
                    </div>
                </div>
            </NavLink>
            <div className={s.headerRight}>
                <img onClick={props.onAsideOpened} src='./img/basket.svg' className={s.group}/>
                <p onClick={props.onAsideOpened} className={s.summ}>1205 руб.</p>
                <NavLink to='/favorites'><img src='./img/headerLike.svg' className={s.heart}
                                              onClick={()=>props.setFavoritesOpened(!props.favoritesOpened)}/></NavLink>
                <img src='./img/headerProfile.svg' className={s.man}/>
            </div>
        </header>
    )
}

export default Header;