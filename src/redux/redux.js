import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { addItem,removeItem,clearCart} from './slice1';

function Redux() {
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    console.log("cartItems",cartItems);
    const addItems=(items)=>{
      console.log("addItem",items)
     //dispatch(addItem("pizza"));

    }
/**z
 * Dispatches an action to remove an item from the cart.
 */
const removeItems=()=>{

  dispatch(removeItem())
};
const  clearItems=()=>{
  dispatch(clearCart())

}
  return (
    <div>reduxN
    <button onClick={addItems}>ADD ITEMS</button>
    <button onClick={removeItems}>REMOVE ITEMS</button>
    <button onClick={clearItems}>REMOVE ITEMS</button>

    {cartItems.map((item,index)=>{
      return(
      <ul key={index}>
      <li>{item}</li>
      </ul>
      )
    })
    }
    </div>
  )
}

export default Redux;