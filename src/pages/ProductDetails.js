import React, { useState } from 'react';

// import data
import { ProductsData } from '../data';

// import use params
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

// import icons
// import { Link } from 'react-router-dom';

const ProductDetails = () => {
  // get the house id

  // button click change
  const [buttonCall, setButtonCall] = useState('Call')

  function handleCall(){
    setButtonCall('09122427432')
  }
 
  let submitted = useState(false);
  const {id} = useParams();
  // console.log(id);
  //get the house based on the id
  const product = ProductsData.find(product => {
    return product.id === parseInt(id)
  })
  
  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14 pt-40'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold '>{product.name}</h2>
            {/* <h3 className='text-lg mb-4 '>{house.address}</h3> */}
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 rounded-full'>{product.type}</div>
            <div className='bg-gray-500 text-white px-3 rounded-full'>{product.state}</div>
          </div>
          <div className='text-3xl font-semibold text-green-600'>₦ {product.price}</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={product.imageLg} alt=''/>
            </div>
          <div>{product.description}</div>  
          </div>
          <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
          <p className='text-center text-green-500' style={{fontWeight: 600, fontSize: 20,}}>Contact Farmer</p>
            <div className='flex items-center gap-x-4 mb-6'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={product.agent.image} className='rounded-full h-[70px]' alt=''/>
              </div>
              <div>
                <div className='font-bold text-lg'>{product.agent.name}</div>
                {/* <Link to='' className='text-violet-700 text-sm'>View Listings</Link> */}
              </div>
            </div>

          <iframe
            title='myFrame'
            name="hidden_iframe"
            id="hidden_iframe"
            style={{display: "none"}}
            onLoad={()=>{if(submitted) {window.location="https://alp-ech2023.vercel.app/"}}}
          />
            {/* Form */}
            <form className='flex flex-col gap-y-2' 
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdYVtHVe2Fk1gpDcAId6grKg1QQTyWUUh_K25vFB3SIgPdOZg/formResponse"
                method='POST'
                target="hidden_iframe"
                >
              <input value={product.agent.name} name="entry.1898621238" hidden/>
              <input className='border border-gray-300 focus:border-green-500 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.1004851794" placeholder='Name'/>
              <input className='border border-gray-300 focus:border-green-500 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.1688798114" placeholder='Email'/>
              <input className='border border-gray-300 focus:border-green-500 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.1402859037" placeholder='Phone'/>
                <input className='border border-gray-300 focus:border-green-500 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.438008601" placeholder='Item Name' value={product.name} readOnly/>
              <input className='border border-gray-300 focus:border-green-500 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.160733127" placeholder='Location' value={product.state} readOnly/>
              <input className='border border-gray-300 focus:border-green-500 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.1334121096" placeholder='Price' value={product.price} readOnly/>
              <textarea className='border border-gray-300 focus:border-green-500 outline-none
                rounded w-full px-4 h-20 text-sm text-black' name="entry.139668219" placeholder='Message' ></textarea>
              <div className='flex gap-x-2'>
                <button className='bg-green-500 hover:bg-green text-white rounded
                  p-4 text-sm w-full transition'>Send Message</button>
                
              </div>
            </form>

            <button 
                className='block border border-green-500 text-green-500 hover:border-green-500 
                  hover:text-green-500 rounded p-4 my-3 text-sm w-full transtion'
                  onClick={()=>handleCall()}
                  >{buttonCall}</button>
          </div>
        </div>

      </div>

      <div className='pt-56'>
    <Footer/>
    </div>
    </section>
    )
};

export default ProductDetails;