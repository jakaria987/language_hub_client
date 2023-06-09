import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div>
      <div className="uppercase flex justify-evenly items-center pb-4">
        <h4 className="text-2xl">Total class : {cart.length}</h4>
        <h4 className="text-2xl">Total price : {total} $</h4>
        <button className="btn btn-info px-8">PAY</button>
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
                      <button className="btn btn-ghost btn-md hover:bg-red-500 bg-cyan-500"><FaTrash></FaTrash></button>
                    </td>
                    <td>
                      <button className="btn btn-ghost btn-md hover:bg-green-400 bg-cyan-500">PAY</button>
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
