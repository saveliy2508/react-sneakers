import s from "./Aside.module.scss";

function CartItem(props) {
    return (
        <div className={s.cartItem}>
            <img className={s.cartImg} src={props.imgSrc} alt=""/>
            <div className={s.cartText}>
                <p className={s.cartModel}>{props.name}</p>
                <p className={s.cartPrice}>{props.price} руб.</p>
            </div>
            <img src="./img/remove.svg" alt="remove"/>
        </div>
    )
}

export default CartItem;