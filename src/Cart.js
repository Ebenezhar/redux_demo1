import React from 'react'
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ecommerceActionCreator } from './action-creator';
import { Link } from 'react-router-dom';

function Cart() {
  const ecommerce = useSelector(state => state.ecommerce);
  const dispatch = useDispatch();
  const { removeFromCart,resetCart } = bindActionCreators(ecommerceActionCreator, dispatch);
  return (
    <div className='container'>
      <h2>Cart Items</h2>
      <h3>{ecommerce.total}</h3>
      <ul className="list-group">
        {
          ecommerce.cart.map(item => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {item.name}
                <button onClick={() => removeFromCart(item)} className="badge badge-danger badge-pill">X</button>
              </li>
            )
          })
        }

      </ul>
      <button onClick={() => resetCart()} className="btn btn-primary m-2">Reset</button>
      <Link to = {'/'} className='btn btn-primary m-2'>Back to Shop</Link> 
    </div>

  )
}

export default Cart