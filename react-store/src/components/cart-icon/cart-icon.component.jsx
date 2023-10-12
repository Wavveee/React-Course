import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'
import { useContext } from 'react'

const CardIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shoping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CardIcon