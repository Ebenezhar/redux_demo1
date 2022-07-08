import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ecommerceActionCreator } from './action-creator';

function Home() {
  const ecommerce = useSelector(state => state.ecommerce);
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(ecommerceActionCreator, dispatch);
  return (
    <div className='container'>
      <div className='row'>
        {
          ecommerce.products.map((product) => {
            return (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img className="card-img-top" src="https://picsum.photos/200/200/" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
                </div>
              </div>)
          })
        }
      </div>
      <Link to='/cart' className='btn btn-primary m-3'>{ecommerce.cart.length}Go to Cart</Link>
    </div>
  )
}

export default Home