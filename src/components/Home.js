import Cart from './Cart'
import ShoppingList from './ShoppingList'

function Home(){
    return (
        <div className='lmj-layout-inner'>
            <Cart />
            <ShoppingList />
        </div>
    )
}

export default Home