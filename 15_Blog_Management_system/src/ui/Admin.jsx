
import { useEffect, useState, useContext } from "react";

import {
  getAllUsers,
  deleteUserByAdmin,
  updateUserByAdmin,
} from "../api/user";

import { AuthContext } from "../context/contextauth";

const Admin = () => {
  const { token } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);

  const [input, setInput] = useState({
    Name: "",
    Address: "",
    Phone: "",
    isVerified: "",
  });

  const loadUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data || []);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleEdit = (user) => {
    setEditId(user._id);

    setInput({
      Name: user.Name || "",
      Address: user.Address || "",
      Phone: user.Phone || "",
      isVerified: user.isVerified ? "true" : "false",
    });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updateData = {
        Name: input.Name,
        Address: input.Address,
        Phone: input.Phone,
        isVerified: input.isVerified === "true",
      };

      await updateUserByAdmin(editId, updateData, token);

      alert("User updated successfully");

      setEditId(null);
      loadUsers();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await deleteUserByAdmin(id, token);

      alert("User deleted successfully");
      loadUsers();
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <div className="card shadow p-3">

        <h4>Total Users: {users.length}</h4>

        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">

            <thead className="table-dark">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Role}</td>
                  <td>{user.Address}</td>
                  <td>{user.Phone}</td>

                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

      {editId && (
        <div className="card shadow p-4 mt-4">

          <h4>Update User</h4>

          <form onSubmit={handleUpdate}>

            <input
              className="form-control mb-3"
              name="Name"
              value={input.Name}
              onChange={handleChange}
              required
            />

            <input
              className="form-control mb-3"
              name="Address"
              value={input.Address}
              onChange={handleChange}
              required
            />

            <input
              className="form-control mb-3"
              name="Phone"
              value={input.Phone}
              onChange={handleChange}
              required
            />

            <select
              className="form-select mb-3"
              name="isVerified"
              value={input.isVerified}
              onChange={handleChange}
            >
              <option value="true">Verified</option>
              <option value="false">Not Verified</option>
            </select>

            <button className="btn btn-success me-2">
              Update
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditId(null)}
            >
              Cancel
            </button>

          </form>
        </div>
      )}

    </div>
  );
};

export default Admin;
