import React from "react";
import s from "../home.module.scss";
import AppContext from '../../../context'
import axios from "axios";

function Card({id, name, price, imgSrc, getObj, onPlus, onLike, favorited=false, added=false, setCartItems}) {
    const [addBtn, setAddBtn] = React.useState(added);
    const onPlusClick = () => {
        setAddBtn(!addBtn);
        onPlus({id, name, price, imgSrc});
    }
    const [addLike, setAddLike] = React.useState(favorited);
    const onLikeClick = () => {
        setAddLike(!addLike);
        onLike({id, name, price, imgSrc});
    }

    const {isItemAdded} = React.useContext(AppContext);
    return (
        <div className={s.card}>
            <img className={s.liked} onClick={onLikeClick} src={addLike ? './img/liked.svg' : './img/notLiked.svg'} alt='Like'/>
            <img className={s.cardImg} src={imgSrc}/>
            <div className={s.cardText}>
                {name}
            </div>
            <div className={s.cardFooter}>
                <div className={s.text}>
                    <p className={s.price}>ЦЕНА:</p>
                    <p className={s.numbers}>{`${price} руб.`}</p>
                </div>
                <img onClick={onPlusClick} src={isItemAdded(id) ? './img/added.svg' : './img/notAdded.svg'} alt='Add'/>
            </div>
        </div>
    )
}

export default Card;