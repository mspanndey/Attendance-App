import React, { useState } from "react";
import GoBack from "../component/goBack";

const ProfileScreen = () => {
  // Example user details
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1-234-567-890",
    department: "Engineering",
    role: "Software Developer",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    attendanceStats: {
      totalDays: 30,
      presentDays: 25,
      absentDays: 5,
    },
  });

  return (
    <div
      className="container-fluid py-1"
      style={{ maxWidth: "1200px", margin: "auto" }}
    >
      {/* Header Row */}
      <div className="row">
        <GoBack name={"Profile"} />
      </div>

      {/* Profile Picture */}
      <div className="row justify-content-center my-3">
        <div className="col-12 col-md-4 text-center">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h4>{user.name}</h4>
        </div>
      </div>

      {/* Profile Details */}
      <div className="row my-1">
        <div className="col-12">
          <h5>Profile Details</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{user.phone}</td>
              </tr>
              <tr>
                <th>Department</th>
                <td>{user.department}</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>{user.role}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="row my-4">
        <div className="col-12 text-center">
          <button className="btn btn-primary me-3">Update Profile</button>
          <button className="btn btn-secondary">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
