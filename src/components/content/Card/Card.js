import s from "../market.module.scss";

function Card(props) {
    return (
        <div className={s.card}>
            <img className={s.liked} src='./img/notLiked.svg'/>
            <img className={s.cardImg} src={props.imgSrc}/>
            <div className={s.cardText}>
                {props.name}
            </div>
            <div className={s.cardFooter}>
                <div className={s.text}>
                    <p className={s.price}>ЦЕНА:</p>
                    <p className={s.numbers}>{`${props.price} руб.`}</p>
                </div>
                <img src='./img/notAdded.svg'/>
            </div>
        </div>
    )
}

export default Card;