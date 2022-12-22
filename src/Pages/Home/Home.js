import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import PrivateRoute from '../../Route/PrivateRoute';
import EachAdvertise from './Advirtise/EachAdvertise/EachAdvertise';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import DisCount from './Discount/DisCount';
 

const Home = () => {
  const {user} = useContext(AuthContext);
     const {data : products =[],refetch, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(`https://recycle-cloth-server.vercel.app/advertise`,{
         headers : {
                authorization : `bearer ${localStorage.getItem('token')}`
              }   }

      ).then(res =>
        res.json()
      )
  })
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        {
        user?.email &&  products.length > 0 &&
     

        <EachAdvertise products={products} refetch={refetch} isLoading={isLoading}></EachAdvertise>

        
}
        <DisCount></DisCount>
    </div>
  );
};

export default Home;