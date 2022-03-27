import s from "./Aside.module.scss";

function CartItem() {
    return (
        <div className={s.cartItem}>
            <img className={s.cartImg} src="./img/3.jpg" alt=""/>
            <div className={s.cartText}>
                <p className={s.cartModel}>Мужские Кроссовки Nike Air Max 270</p>
                <p className={s.cartPrice}>12 999 руб.</p>
            </div>
            <img src="./img/remove.svg" alt="remove"/>
        </div>
    )
}

export default CartItem;