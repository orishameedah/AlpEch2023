import React from 'react';
import ProductList from '../components/ProductList'
import Search from '../components/Search';
import Footer from '../components/Footer';

const ProductPage = () => {
    return (
        <div className='min-h-[1800px] pt-36'>
            <div className='lg:mb-20 mb-12 text-center justify-center '>
                <h1 className='text-2xl lg:text-4xl font-bold text-green-500 mb-4 italic'>Our Product Item</h1>
                <p className='text-xl font-bold max-w-[800px] mx-auto'>All our product price is differ from our deliver price, our product are sold based on basket size,
                    bag, rubber. We are highly into fresh, organic product and  nutritional healthy liveStock which you 
                    will also love when you patronage us. 
                </p>
            </div>
            <Search className='mt-26'/>
            <ProductList />

            <div className='pt-96'>
    <Footer/>
    </div>
        </div>

        
    )
}

export default ProductPage;