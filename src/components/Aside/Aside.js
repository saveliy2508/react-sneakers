import s from "./Aside.module.scss";
import CartItem from './CartItem'

function Aside({onAsideClosed, items=[]}) {
    return (
        <div className={s.overlay}>
            <div className={s.drawer}>
                <h2 className={s.drawer__title}>
                    <p>Корзина</p>
                    <img onClick={onAsideClosed} src="./img/cross.png" alt="cross"/>
                </h2>
                <div className={s.cartItems}>
                    {items.map((item) => (
                        <CartItem name={item.name} price={item.price} imgSrc={item.imgSrc}/>
                    ))}
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