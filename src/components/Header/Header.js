import React from "react";
import {NavLink} from 'react-router-dom'

import s from "./header.module.scss";

function Header(props) {
    return (
        <header className={s.header}>
            <NavLink to='/' className={s.navLink}>
                <div className={s.headerLeft}>
                    <img src='./img/logo.svg' alt='logo'/>
                    <div className={s.text}>
                        <p className={s.title}>REACT SNEAKERS</p>
                        <p className={s.slogan}>Лучший магазин кроссовок</p>
                    </div>
                </div>
            </NavLink>
            <div className={s.headerRight}>
                <img onClick={props.onAsideOpened} src='./img/basket.svg' className={s.group} alt='cart'/>
                <p onClick={props.onAsideOpened}
                   className={s.summ}>{props.totalPrice > 0 ? `${props.totalPrice} руб.` : null}</p>
                <NavLink to='/favorites'><img src='./img/headerLike.svg' className={s.heart}
                                              onClick={() => props.setFavoritesOpened(!props.favoritesOpened)} alt='like'/>
                </NavLink>
                <NavLink to='/orders'><img src='./img/headerProfile.svg' className={s.man} alt='orders'/></NavLink>
            </div>
        </header>
    )
}

export default Header;