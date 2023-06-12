import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = item => {
    Swal.fire({
        title: 'Are you sure?',
        text: "Want to delete this class?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://final-assignment-server-jakaria987.vercel.app/carts/${item._id}`, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
          })
        }
      })
  }

  return (
    <div className="bg-cyan-400">
      <div className="uppercase flex justify-evenly items-center pb-4">
        <h4 className="text-2xl">Total class : {cart.length}</h4>
        {/* <h4 className="text-2xl">Total price : {total} $</h4> */}
        {/* <button className="btn btn-info px-8">PAY</button> */}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-bold text-lg">
                SL.
              </th>
              <th className="font-bold text-lg">Image</th>
              <th className="font-bold text-lg">Book</th>
              <th className="font-bold text-lg">Price</th>
              <th className="font-bold text-lg">Action</th>
              <th className="font-bold text-lg">Payment</th>

            </tr>
          </thead>
          <tbody>
            {
                cart.map((item, index) => <tr key={item._id}>
                    <td className="font-bold text-lg">
                      {index + 1}
                    </td>
                    <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                    </td>
                    <td className="font-bold text-lg">
                      {item.name}
                    </td>
                    <td className="text-end font-bold text-lg">{item.price}$</td>
                    <td>
                      
                      <button onClick={ () => handleDelete(item)} className="btn btn-ghost btn-md hover:bg-red-500 bg-cyan-500"><FaTrash></FaTrash></button>
                      
                    </td>
                    <td>
                      <Link to={`/dashboard/myenrolledclasses/${item._id}`}>
                      <button className="btn btn-ghost btn-md hover:bg-green-400 bg-cyan-500">PAY</button>
                      </Link>
                    </td>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
