import React from "react";
import {Link} from 'react-router-dom';

import s from "./OrdersPage.module.scss";
import axios from "axios";

async function OrdersPage(props) {
    const orderResponse = await axios.get('https://6242deadd126926d0c58b871.mockapi.io/orders')
    await props.makeOrder(orderResponse.data)

    let currentOrders = Object.values(props.orders[0])
    currentOrders.pop()
    console.log(currentOrders)
    return (
        <div className={s.content}>
            {props.orders.length > 0 ? (
                <>
                {/*{currentOrders.map((item) => (
                            <div className={s.header}>
                                <h1 className={s.title}>Ваша покупка</h1>
                            </div>
                            <div className={s.cards}>
                                {props.orders
                                    .map((item) =>
                                        (
                                            <div className={s.card}>
                                                <div className={s.card}>
                                                    <img className={s.cardImg} src={item.imgSrc} alt='sneakerImg'/>
                                                    <div className={s.cardText}>
                                                        {item.name}
                                                    </div>
                                                    <div className={s.cardFooter}>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                            </div>
                    )
                    )
                }*/}
                </>
            ) : (
                <div className={s.ifEmpty}>
                    <img className={s.smile} src="./img/smile2.svg" alt="smile"/>
                    <p className={s.favTitle}>У вас нет заказов</p>
                    <Link to='/'>
                        <button><img src="./img/leftArrow.svg" alt=""/>Вернуться назад</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default OrdersPage;