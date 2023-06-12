import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserSecret, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users")
    return res.data;
  });
  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: "PATCH"
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `congratulation ${user.name} <br> you are admin now`,
                showConfirmButton: false,
                timer: 2000
              })
        }
    })
  }
  const handleMakeInstructor = user => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
        method: "PATCH"
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `congratulation ${user.name} <br> you are instructor now`,
                showConfirmButton: false,
                timer: 2000
              })
        }
    })
  }
  const handleDelete = (user) => {
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
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
              refetch();
              Swal.fire(
                  'Deleted!',
                  'User has been deleted.',
                  'success'
                )
          }
        })
      }
    })
  }

  return (
    <div className="space-x-8">
      <h3 className="text-3xl font-semibold my-4 text-center mb-4">
        Total registered users: {users.length} people
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Instructor</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === 'admin' ? 'admin' : <button onClick={ () => handleMakeAdmin(user)} className="btn btn-ghost btn-md hover:bg-green-700 bg-cyan-500"><FaUserShield></FaUserShield></button>}</td>
                <td>{user.role === 'instructor' ? 'instructor' : <button onClick={ () => handleMakeInstructor(user)} className="btn btn-ghost btn-md hover:bg-green-700 bg-cyan-500"><FaUserSecret></FaUserSecret></button>}</td>
                <td>
                    <button onClick={ () => handleDelete(user)} className="btn btn-ghost btn-md hover:bg-red-500 bg-cyan-500"><FaTrash></FaTrash></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
