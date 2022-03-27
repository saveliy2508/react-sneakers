import s from "./Aside.module.scss";
import CartItem from './CartItem'

function Aside() {
    return (
        <div className={s.overlay}>
            <div className={s.drawer}>
                <h2 className={s.drawer__title}>
                    Корзина
                </h2>
                <div className={s.cartItems}>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className={s.drawerFooter}>
                    <div className={s.summ}>
                        <p className={s.text}>Итого: </p>
                        <p className={s.numbers}><b>21 498 руб. </b></p>
                    </div>
                    <div className={s.summ}>
                        <p className={s.text}>Налог 5%: </p>
                        <p className={s.numbers}><b>1074 руб.</b></p>
                    </div>
                    <button className={s.greenButton}>Оформить заказ<img src='./img/arrow.svg'/></button>
                </div>
            </div>
        </div>
    )
}

export default Aside;