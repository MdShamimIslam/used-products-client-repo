import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
 
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';
import BookingModal from '../BokkingModal/BookingModal';
 
 
 
 

const EachAdvertise = ({products, refetch, isLoading}) => {
  const [eachProduct, setEachProduct] = useState(null);

   console.log(products);
  return (
       <div className='py-8' >
    <div className='text-start'>
      
      <h2 className="text-5xl mx-16 my-10 font-semibold">Our Advertise Product</h2>
 
    </div>
     <div className='grid md:grid-cols-1-2 grid-cols-1 lg:grid-cols-3 gap-8'>
      {
         products?.map(product => {
          return <AdvertiseCard key={product._id}
          setEachProduct={setEachProduct}
          product={product} ></AdvertiseCard>
        })
      }
    </div>


    {
      eachProduct &&
      <BookingModal setEachProduct={setEachProduct} eachProduct={eachProduct}></BookingModal>}

   </div>


 
  );
};

export default EachAdvertise;