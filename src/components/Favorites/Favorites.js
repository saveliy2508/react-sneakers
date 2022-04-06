import React from "react";
import {Link} from 'react-router-dom';

import Card from '../Home/Card/Card';
import s from "./favorites.module.scss";

import AppContext from "../../context";

function Favorites(props) {
    const {
        favoritesItems
    } = React.useContext(AppContext)
    return (
        <div className={s.content}>
            {favoritesItems.length > 0 ? (
                <>
                    <div className={s.headerCards}>
                        <h1 className={s.title}>Избранное</h1>
                    </div>
                    <div className={s.cards}>
                        {favoritesItems
                            .map((item, index) =>
                                (
                                    <Card
                                        favorited={true}
                                        key={index}
                                        name={item.name}
                                        price={item.price}
                                        imgSrc={item.imgSrc}
                                        id={item.id}
                                        getObj={item}
                                        onPlus={(obj) => props.onAddToCart(obj)}
                                        onLike={(obj) => props.onAddToFavorites(obj)}/>
                                )
                            )}
                    </div>
                </>
            ) : (
                <div className={s.ifEmpty}>
                    <img className={s.smile} src="https://saveliy2508.github.io/react-sneakers/img/smile.svg" alt="smile"/>
                    <p className={s.favTitle}>Закладок нет :(</p>
                    <p className={s.favText}>Вы ничего не добавляли в закладки</p>
                    <Link to='/'>
                        <button><img src="https://saveliy2508.github.io/react-sneakers/img/leftArrow.svg" alt=""/>Вернуться назад</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Favorites;