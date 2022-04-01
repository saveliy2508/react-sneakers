import s from "./Aside.module.scss";
import CartItem from './CartItem'

function Aside({onAsideClosed, items = [], onDeleteCartItem}) {
    return (
        <div className={s.overlay}>
            <div className={s.drawer}>
                <h2 className={s.drawer__title}>
                    <p>Корзина</p>
                    <img onClick={onAsideClosed} src="./img/cross.png" alt="cross"/>
                </h2>

                {items.length > 0 ? (
                    <div>
                        <div className={s.cartItems}>
                            {items.map((item) => (
                                <CartItem id={item.id} onDeleteCartItem={() => onDeleteCartItem(item.index)}
                                          name={item.name} price={item.price} imgSrc={item.imgSrc}/>
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
                ) : (
                    <div className={s.emptyItems}>
                        <div>
                            <img className={s.emptyBox} src="./img/imgBox.png" alt=""/>
                            <h2>Корзина пустая</h2>
                            <p className={s.text}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onAsideClosed}  className={s.greenButton}>
                                <img src="./img/leftArrow.svg" alt="arrow"/>
                                Вернуться назад
                            </button>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Aside;