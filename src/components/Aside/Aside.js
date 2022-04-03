import s from "./Aside.module.scss";
import CartItem from './CartItem'
import axios from "axios";
import React from 'react'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Aside({onAsideClosed, items = [], onDeleteCartItem, changeMadeOrder, madeOrder, setCartItems, cartItems}) {
    const [disabled, changeDisable] = React.useState(false)
    const onMakeOrder = async () => {
        changeDisable(true)
        changeMadeOrder(true)
        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i]
            await axios.delete(`https://6242deadd126926d0c58b871.mockapi.io/cart/${item.index}`)
            await delay(250)
        }
        changeDisable(false)
        setCartItems([])
    }
    const onClose = () => {
        onAsideClosed()
        changeMadeOrder(false)
    }


    return (
        <div className={s.overlay}>
            <div className={s.drawer}>
                <h2 className={s.drawer__title}>
                    <p>Корзина</p>
                    <img onClick={onClose} src="./img/cross.png" alt="cross"/>
                </h2>

                {items.length > 0 ? (
                    <div>
                        <div className={s.cartItems}>
                            {items.map((item, index) => (
                                <CartItem
                                    key={index}
                                    id={item.id}
                                    onDeleteCartItem={() => onDeleteCartItem(item.index)}
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
                            <button className={s.greenButton} onClick={onMakeOrder} disabled={disabled}>Оформить заказ<img
                                src='./img/arrow.svg'/></button>
                        </div>
                    </div>
                ) : (
                    <div className={s.emptyItems}>
                        <div>
                            <img className={s.emptyBox} src={madeOrder ? './img/order.png' : './img/imgBox.png'}
                                 alt=""/>
                            <h2>{madeOrder ? 'Заказ оформлен!' : 'Корзина пустая'}</h2>
                            <p className={s.text}>{madeOrder ? 'Ваш заказ #18 скоро будет передан курьерской доставке' : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}</p>
                            <button onClick={onClose} className={s.greenButton}>
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