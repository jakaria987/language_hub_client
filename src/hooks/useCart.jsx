import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user, loading} = useContext(AuthContext);

    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data : cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading && !!user,
        // queryFn: async () => {
        //     const res = await fetch(`https://final-assignment-server-jakaria987.vercel.app/carts?email=${user?.email}`, {
        //         headers: {authorization: `bearer ${token}`}
        //     })
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
      })
      return [cart, refetch]
}
export default useCart;