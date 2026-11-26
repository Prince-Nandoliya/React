
import { useState, useContext } from "react";
import { AuthContext } from "../context/contextauth";
import { updateUser, deleteUser, logoutAllUsers } from "../api/user";

const Profile = () => {
  const { user, token, setUser, logout } = useContext(AuthContext);

  const [input, setInput] = useState({
    Name: user?.Name || "",
    Address: user?.Address || "",
    Phone: user?.Phone || "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(input).forEach((key) => {
        formData.append(key, input[key]);
      });

      if (image) {
        formData.append("Profile_pic", image);
      }

      const updated = await updateUser(null, formData, token);

      if (updated) {
        setUser(updated);
        localStorage.setItem("user", JSON.stringify(updated));
      }

      alert("Profile updated successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogoutAll = async () => {
    try {
      await logoutAllUsers(token);
      await logout();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm("Are you sure you want to delete your account?")) {
      return;
    }

    try {
      await deleteUser(token);
      await logout();
    } catch (error) {
      alert(error.message);
    }
  };

  if (!user) return null;

  return (
    <div className="container py-5">
      <div className="card shadow p-4 mx-auto form-card">

        <h2 className="text-center mb-4">My Profile</h2>

        {user.Profile_pic && (
          <img
            src={user.Profile_pic}
            alt="Profile"
            className="profile-image mx-auto mb-3"
          />
        )}

        <p><strong>Email:</strong> {user.Email}</p>
        <p><strong>Role:</strong> {user.Role}</p>

        <form onSubmit={handleUpdate}>

          <label className="form-label">Name</label>
          <input
            className="form-control mb-3"
            name="Name"
            value={input.Name}
            onChange={handleChange}
            required
          />

          <label className="form-label">Address</label>
          <input
            className="form-control mb-3"
            name="Address"
            value={input.Address}
            onChange={handleChange}
            required
          />

          <label className="form-label">Phone</label>
          <input
            className="form-control mb-3"
            name="Phone"
            value={input.Phone}
            onChange={handleChange}
            required
          />

          <label className="form-label">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control mb-3"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button className="btn btn-primary w-100">
            Update Profile
          </button>
        </form>

        <hr />

        <button
          className="btn btn-warning mb-2"
          onClick={handleLogoutAll}
        >
          Logout From All Devices
        </button>

        <button
          className="btn btn-danger"
          onClick={handleDeleteAccount}
        >
          Delete My Account
        </button>

      </div>
    </div>
  );
};

export default Profile;
