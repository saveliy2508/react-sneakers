import React from 'react'
import axios from "axios";

import CartItem from './CartItem'

import s from "./Aside.module.scss";
import AppContext from "../../context";

function Aside({totalPrice, onMakeOrder, onAsideClosed, items = [], onDeleteCartItem, changeMadeOrder, madeOrder, makeOrder}) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const {setCartItems, cartItems} = React.useContext(AppContext)

    const [disabled, changeDisable] = React.useState(false)

    const onClickOrder = async () => {
        changeDisable(true)
        changeMadeOrder(true)
        onMakeOrder(cartItems)
        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i]
            await axios.delete(`https://625dee41d434c6001c5456d8.mockapi.io/cart/${item.index}`)
            await delay(250)
        }
            const orderResponse = await axios.get('https://625dee41d434c6001c5456d8.mockapi.io/orders')
            await makeOrder(orderResponse.data)
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
                    <img onClick={onClose} src="/react-sneakers/img/cross.png" alt="cross"/>
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
                                <p className={s.numbers}><b>{totalPrice} руб. </b></p>
                            </div>
                            <div className={s.summ}>
                                <p className={s.text}>Налог 5%: </p>
                                <p className={s.numbers}><b>{Math.round(totalPrice/100*5)} руб.</b></p>
                            </div>
                            <button className={s.greenButton} onClick={onClickOrder} disabled={disabled}>Оформить заказ<img
                                src='/react-sneakers/img/arrow.svg' alt='Стрелка'/></button>
                        </div>
                    </div>
                ) : (
                    <div className={s.emptyItems}>
                        <div>
                            <img className={s.emptyBox} src={madeOrder ? '/react-sneakers/img/order.png' : '/react-sneakers/img/imgBox.png'}
                                 alt=""/>
                            <h2>{madeOrder ? 'Заказ оформлен!' : 'Корзина пустая'}</h2>
                            <p className={s.text}>{madeOrder ? 'Ваш заказ #18 скоро будет передан курьерской доставке' : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}</p>
                            <button onClick={onClose} className={s.greenButton}>
                                <img src="/react-sneakers/img/leftArrow.svg" alt="arrow"/>
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