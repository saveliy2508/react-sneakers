import React from "react";
import {NavLink} from 'react-router-dom'

import s from "./header.module.scss";

function Header(props) {
    return (
        <header className={s.header}>
            <NavLink to='/react-sneakers' className={s.navLink}>
                <div className={s.headerLeft}>
                    <img src='https://saveliy2508.github.io/react-sneakers/img/logo.svg' alt='logo'/>
                    <div className={s.text}>
                        <p className={s.title}>REACT SNEAKERS</p>
                        <p className={s.slogan}>Лучший магазин кроссовок</p>
                    </div>
                </div>
            </NavLink>
            <div className={s.headerRight}>
                <img onClick={props.onAsideOpened} src='https://saveliy2508.github.io/react-sneakers/img/basket.svg' className={s.group} alt='cart'/>
                <p onClick={props.onAsideOpened}
                   className={s.summ}>{props.totalPrice > 0 ? `${props.totalPrice} руб.` : null}</p>
                <NavLink to='/react-sneakers/favorites'><img src='https://saveliy2508.github.io/react-sneakers/img/headerLike.svg' className={s.heart}
                                              onClick={() => props.setFavoritesOpened(!props.favoritesOpened)} alt='like'/>
                </NavLink>
                <NavLink to='/react-sneakers/orders'><img src='https://saveliy2508.github.io/react-sneakers/img/headerProfile.svg' className={s.man} alt='orders'/></NavLink>
            </div>
        </header>
    )
}

export default Header;