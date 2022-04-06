import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Aside from "./components/Aside/Aside";
import Favorites from './components/Favorites/Favorites'
import OrdersPage from './components/OrdersPage/OrdersPage'

import s from './index.module.scss';
import AppContext from './context'

function App() {
    const [items, setItems] = React.useState([])

    const [asideOpened, setAsideOpened] = React.useState(false);

    const [favoritesOpened, setFavoritesOpened] = React.useState();

    const [cartItems, setCartItems] = React.useState([])

    const [favoritesItems, setFavoritesItems] = React.useState([])

    const [searchValue, setSearchValue] = React.useState('')

    const [isLoading, changeLoading] = React.useState(true)

    const [orders, makeOrder] = React.useState([])

    const [madeOrder, changeMadeOrder] = React.useState(false)

    const onMakeOrder = async (obj) => {
        if(orders.length>0) {
            await axios.delete('https://6242deadd126926d0c58b871.mockapi.io/orders/1', obj);
        }
        makeOrder([])
        makeOrder(obj);
        await axios.post('https://6242deadd126926d0c58b871.mockapi.io/orders', obj);
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onDeleteSearch = () => {
        setSearchValue('')
    }

    const onDeleteCartItem = (index) => {
        axios.delete(`https://6242deadd126926d0c58b871.mockapi.io/cart/${index}`)
        setCartItems((prev) => prev.filter(item => Number(item.index) !== Number(index)))
    }

    const onAddToCart = async (obj) => {
        if (cartItems.some((i) => i.name === obj.name)) {
            let index = cartItems.find(i => i.name === obj.name).index;
            setCartItems((prev) => prev.filter(item => item.name !== obj.name))
            await axios.delete(`https://6242deadd126926d0c58b871.mockapi.io/cart/${index}`)
        } else {
            setCartItems((prev) => [...prev, obj])
            await axios.post('https://6242deadd126926d0c58b871.mockapi.io/cart', obj)
        }
        async function fetchData() {
            const cartResponse = await axios.get('https://6242deadd126926d0c58b871.mockapi.io/cart')
            await setCartItems(cartResponse.data)
        }
        await fetchData()
    }

    const onAddToFavorites = async (obj) => {
        if (favoritesItems.some((i) => i.name === obj.name)) {
            let index = favoritesItems.find(i => Number(i.id) === Number(obj.id)).index;
            setFavoritesItems((prev) => prev.filter(item => item.name !== obj.name))
            await axios.delete(`https://6242deadd126926d0c58b871.mockapi.io/favorites/${index}`)
        } else {
            setFavoritesItems((prev) => [...prev, obj])
            await axios.post('https://6242deadd126926d0c58b871.mockapi.io/favorites', obj)
        }
        async function fetchData() {
            const favoritesResponse = await axios.get('https://6242deadd126926d0c58b871.mockapi.io/favorites')
            await setFavoritesItems(favoritesResponse.data)
        }
        await fetchData()
    }

    React.useEffect(() => {
        async function fetchData() {
            const orderResponse = await axios.get('https://6242deadd126926d0c58b871.mockapi.io/orders')
            const cartResponse = await axios.get('https://6242deadd126926d0c58b871.mockapi.io/cart')
            const favoritesResponse = await axios.get('https://6242deadd126926d0c58b871.mockapi.io/favorites')
            const itemResponse = await axios.get('https://6242deadd126926d0c58b871.mockapi.io/items')

            changeLoading(false);

            setCartItems(cartResponse.data)
            setFavoritesItems(favoritesResponse.data)
            setItems(itemResponse.data)
            makeOrder(orderResponse.data)
        }

        fetchData()
    }, []);

    React.useEffect(() => {
        axios.get('https://6242deadd126926d0c58b871.mockapi.io/cart')
            .then(res => setCartItems(res.data))
    }, [asideOpened]);

    React.useEffect(() => {
        axios.get('https://6242deadd126926d0c58b871.mockapi.io/favorites')
            .then(res => setFavoritesItems(res.data))
    }, [favoritesOpened]);

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id))
    }

    const totalPrice = cartItems.reduce((sum, obj) => sum += Number(obj.price), 0)

    return (
        <AppContext.Provider value={{
            items,
            setItems,
            cartItems,
            setCartItems,
            favoritesItems,
            setFavoritesItems,
            isItemAdded} }>
            <div className={s.App}>
                <div className={s.wrapper}>
                    {asideOpened ? <Aside
                        items={cartItems}
                        onAsideClosed={() => setAsideOpened(false)}
                        onDeleteCartItem={onDeleteCartItem}
                        changeMadeOrder={changeMadeOrder}
                        setCartItems={setCartItems}
                        madeOrder={madeOrder}
                        cartItems={cartItems}
                        totalPrice={totalPrice}
                        onMakeOrder={onMakeOrder}
                        makeOrder={makeOrder}
                    /> : null}

                    <Header
                        onAsideOpened={() => setAsideOpened(true)}
                        setFavoritesOpened={setFavoritesOpened}
                        favoritesOpened={favoritesOpened}
                        totalPrice={totalPrice}
                    />

                    <Routes>

                        <Route path='/*' element={
                            <Home
                                onDeleteSearch={onDeleteSearch}
                                onChangeSearchInput={onChangeSearchInput}
                                searchValue={searchValue}
                                onAddToCart={onAddToCart}
                                items={items}
                                setCartItems={setCartItems}
                                setFavoritesItems={setFavoritesItems}
                                onAddToFavorites={onAddToFavorites}
                                cartItems={cartItems}
                                favoritesItems={favoritesItems}
                                isLoading={isLoading}
                                changeLoading={changeLoading}
                            />
                        }/>

                        <Route path='/react-sneakers/favorites' exact element={
                            <Favorites
                                onAddToCart={onAddToCart}
                                setCartItems={setCartItems}
                                onAddToFavorites={onAddToFavorites}
                                items={favoritesItems}
                                setFavoritesItems={setFavoritesItems}
                            />}
                        />

                        <Route path='/react-sneakers/orders' element={
                            <OrdersPage
                            orders={orders}
                            makeOrder={makeOrder}
                            />
                        }/>

                    </Routes>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
