import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import Spinner from '../../../components/Spinner';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProduct = () => {
  const {user} = useContext(AuthContext);
  // const url = http://localhost:5000/product?email=rubelranatpi707458@gmail.com
  
  
   const {data : products =[],refetch, isLoading} = useQuery({
    queryKey: ['products', user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/product?email=${user?.email}`,{
         headers : {
                authorization : `bearer ${localStorage.getItem('token')}`
              }   }

      ).then(res =>
        res.json()
      )
  })

const handleDelete = id => {
    console.log(id);
    fetch(`http://localhost:5000/product/${id}`, {
      method: 'DELETE',
      headers : {
          authorization : `bearer ${localStorage.getItem('token')}`
      }  
    })
    .then(res => res.json()) // or res.json()
    .then(data => {
      refetch();
      toast.success("Delete User Successfully")
        console.log(data);
    })
  }




 const handleAdvertise = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Make Advertise products', { autoClose: 500 })
                refetch()
            })

    }












  console.log("my product products", products);
   if(isLoading) {
    return <Spinner></Spinner>
  }

  return (
   <div>
     <div className="overflow-x-auto w-full">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Status</th>
        <th>Advertise</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        
        products.map((product, i) => 
        <tr key={product?._id}>
        <th>
              {i + 1 }
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src= {product?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
       
          </div>
        </td>
        <td className='font-semibold'>
           {product?.product_name}
 
        </td>
           <td className='font-semibold'>
           {product?.resale_price}
 
        </td>
        <td>
          {
            product?.paid ?
              <p>Sold</p>
            :
            <p>Available</p>

          }
        </td>
           <td className='font-semibold'>
        {
              product.advertise ?
              <button onClick={() => {handleAdvertise(product?._id)}}  className=" disabled:  text-error  btn-md">Advertised</button>
              
              :
              <button onClick={() => {handleAdvertise(product?._id)}}  className="btn btn-ghost rounded-md  border-2 border-red-800 text-error  btn-md">Advertise</button>

              
}
     
 
        </td>
                

        <th>
   
           <button onClick={() => handleDelete(product._id)} className="btn btn-ghost rounded-md  border-2 border-red-800 text-error  btn-error">Delete</button>

        </th>
      </tr>
 
      )
          

       
      }

 
      
    </tbody>
 
 
    
  </table>
</div>
 
 
    </div>
  )
    }
export default MyProduct;