import React from "react";
import s from './index.module.scss';
import Header from './components/Header/Header'
import Market from './components/content/Market'
import Aside from "./components/Aside/Aside";
import axios from "axios";
import {Link, Route, Routes} from "react-router-dom";

function App() {
    const [items, setItems] = React.useState([])

    const [asideOpened, setAsideOpened] = React.useState(false);

    const [cartItems, setCartItems] = React.useState([])

    const [searchValue, setSearchValue] = React.useState('')
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }
    const onDeleteSearch = () => {
        setSearchValue('')
    }

    const onDeleteCartItem = (id) => {
        axios.delete(`https://6242deadd126926d0c58b871.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id != id))
    }

    const onAddToCart = (obj) => {
        if (!cartItems.some((i) => i.name === obj.name)) {
            setCartItems((prev) => [...prev, obj])
            axios.post('https://6242deadd126926d0c58b871.mockapi.io/cart', obj)
        }
        console.log(obj.id)
        // if(cartItems.find(obj => obj.id == id)) {
        //     setCartItems((prev) => prev.filter(item => item.name != obj.name))
        //     axios.delete(`https://6242deadd126926d0c58b871.mockapi.io/cart/${obj.id}`)
        // }
    }
    React.useEffect(() => {
        axios.get('https://6242deadd126926d0c58b871.mockapi.io/items')
            .then(res => setItems(res.data))
        axios.get('https://6242deadd126926d0c58b871.mockapi.io/cart')
            .then(res => setCartItems(res.data))
    }, [asideOpened]);

    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                <Header onAsideOpened={() => setAsideOpened(true)}/>
                {asideOpened ? <Aside
                    items={cartItems}
                    onAsideClosed={() => setAsideOpened(false)}
                    onDeleteCartItem={onDeleteCartItem}
                /> : null}
                <Market
                    onDeleteSearch={onDeleteSearch}
                    onChangeSearchInput={onChangeSearchInput}
                    searchValue={searchValue}
                    onAddToCart={onAddToCart}
                    items={items}
                    setCartItems={() => setCartItems()}
                />}
            </div>
        </div>
    );
}

export default App;
