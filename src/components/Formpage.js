import React from 'react'
import {useState} from 'react';
import axios from 'axios';

export default function Formpage() {
  const [id,setId] = useState('');
  const [title,setTitle] = useState('');
  const [brand,setBrand] = useState('');
  const [price,serPrice] = useState('');
  const [des,setDes] = useState('');
  const [imgurl,setImgurl] = useState('');

  const productsData = {
    productId:id,
    title:title,
    brand:brand,
    price:price,
    des:des,
    imgurl:imgurl
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    axios.post('http://localhost:3002/productsData',productsData).then((res)=>{
      alert('success');
    })
    }

  return (
  <>
    <div className='form-div'>
        <form action='' method='post' onSubmit='handleSubmit'>
          <legend>Form</legend>
          <hr />
          <div>
          <input type='text' className='form-controls' placeholder='ID'/> 
          </div>
          <br/>
          <div>
          <input type='text' className='form-controls' placeholder='brand'/>
          </div>
          <br/>
          <div>
          <input type='text' className='form-controls' placeholder='price'/>
          </div>
          <br/>
          <div>
          <input type='text' className='form-controls' placeholder='price'/>
          </div>
          <br/>
          <div>
          <input type='text' className='form-controls' placeholder='description'/>
          </div>
          <br/>
          <div>
          <input type='text' className='form-controls' placeholder='imageurl'/>
          </div>
          <br/>
          <div style={{width:'20%',margin:'5px auto'}}>
            <input type='submit' value='submit' />
          </div>
        </form>
    </div>
    </>
  )
}
