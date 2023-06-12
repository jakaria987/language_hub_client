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
          fetch(`http://localhost:5000/carts/${item._id}`, {
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
    <div>
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
              <th>
                SL.
              </th>
              <th>Image</th>
              <th>Book</th>
              <th>Price</th>
              <th>Action</th>
              <th>Payment</th>

            </tr>
          </thead>
          <tbody>
            {
                cart.map((item, index) => <tr key={item._id}>
                    <td>
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
                    <td>
                      {item.name}
                    </td>
                    <td className="text-end">{item.price}$</td>
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
