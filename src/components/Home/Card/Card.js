import React from "react";

import s from "../home.module.scss";
import AppContext from '../../../context'

function Card({id, name, price, imgSrc, onPlus, onLike, favorited=false, added=false}) {
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
            <img className={s.liked} onClick={onLikeClick} src={addLike ? 'https://saveliy2508.github.io/react-sneakers/img/liked.svg' : 'https://saveliy2508.github.io/react-sneakers/img/notLiked.svg'} alt='Like'/>
            <img className={s.cardImg} src={imgSrc} alt='sneakerImg'/>
            <div className={s.cardText}>
                {name}
            </div>
            <div className={s.cardFooter}>
                <div className={s.text}>
                    <p className={s.price}>ЦЕНА:</p>
                    <p className={s.numbers}>{`${price} руб.`}</p>
                </div>
                <img onClick={onPlusClick} src={isItemAdded(id) ? 'https://saveliy2508.github.io/react-sneakers/img/added.svg' : 'https://saveliy2508.github.io/react-sneakers/img/notAdded.svg'} alt='Add'/>
            </div>
        </div>
    )
}

export default Card;