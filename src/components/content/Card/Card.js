import React from "react";
import s from "../market.module.scss";

function Card({name, price, imgSrc, getObj, onPlus}) {
    const [addBtn, setAddBtn] = React.useState(false);
    const onPlusClick = () => {
        setAddBtn(!addBtn);
        onPlus({name, price, imgSrc});
    }

    const [addLike, setAddLike] = React.useState(false);
    const onLikeClick = () => {
        setAddLike(!addLike);
    }

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
                <img onClick={onPlusClick} src={addBtn ? './img/added.svg' : './img/notAdded.svg'} alt='Add'/>
            </div>
        </div>
    )
}

export default Card;