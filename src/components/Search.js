import React from 'react';
import flogo from './flogo.png';
import search from './search.png';
import store from './store.png';
import user from './user.png';
import cart from './shopping.png';

export default function Search() {
  return (
    <>
    <div className='col-md-2'>
        <img src={flogo} height="87%" width="67%" alt='flogo' className='logo'/>
    </div>
    <div className='col-md-5' style={{margin:"none",marginTop:'13px'}}>
      <div className='search-div'>
      <img className='bar' src={search} width="25px" height="25px" alt='search'/>
      <input className='search' type='text' placeholder='  Search for Products, Brands and More'/>
      </div>
    </div>
    <div className='col-md-5 row'>
      <div className=' col-md-5'>
      <img className='top-logo' height="20px" width="20px" src={store} alt='seller' />
      <span className='logo-text'>Become a seller</span>
      </div>
      <div className=' col-md-3'>
        <div className='signin'>
      <img className='top-logo' height="20px" width="20px" src={user} alt='seller' />
      <span className='logo-text'>Sign in</span>
      </div>
      </div>
      <div className=' col-md-3'>
      <img className='top-logo' height="20px" width="20px" src={cart} alt='seller' />
      <span className='logo-text'>Cart</span>
      </div>
    </div>
    </>
  )
} 
