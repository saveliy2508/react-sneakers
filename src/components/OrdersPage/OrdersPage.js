import React from "react";
import {Link} from 'react-router-dom';

import s from "./OrdersPage.module.scss";

function OrdersPage(props) {
    let currentOrders;
    if (props.orders[0]) {
        currentOrders = Object.values(props.orders[0])
        currentOrders.pop()
    }
    return (
        <div className={s.content}>
            {currentOrders ? (
                <>
                    <div className={s.header}>
                        <h1 className={s.title}>Ваши покупки</h1>
                    </div>

                    <div className={s.cards}>
                        {currentOrders
                            .map((item, index) =>
                                (
                                        <div className={s.card} key={index}>
                                            <img className={s.cardImg} src={item.imgSrc} alt='sneakerImg'/>
                                            <div className={s.cardText}>
                                                {item.name}
                                            </div>
                                            <div className={s.cardFooter}>
                                            </div>
                                        </div>
                                )
                            )
                        }
                    </div>
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