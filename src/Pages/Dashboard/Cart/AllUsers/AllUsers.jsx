import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Remove the user", "success");
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${user.name} is admin now`,
                showConfirmButton: false,
                timer: 1500,
              });
        }
    })
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All users</h2>
        <h2 className="text-3xl">Total users: {users?.length}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                 {user.role === 'admin' ? "Admin" :
                  <button
                  onClick={() => handleMakeAdmin(user)}
                  className="btn btn-ghost btn-xs"
                >
                  <FaUsers className="text-white bg-orange-500 p-2 text-4xl"></FaUsers>
                </button>}
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrashAlt className="text-red-600 text-xl"></FaTrashAlt>
                  </button>
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
