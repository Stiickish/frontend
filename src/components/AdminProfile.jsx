import React from "react";
import CreateFestival from "./CreateFestival";
import CreateGuest from "./CreateGuest";
import CreatePerformance from "./CreatePerformance";
import DeletePerformance from "./DeletePerformance";

function AdminProfile() {
  return (
    <div>
      <h1>Welcome to the Admin page</h1>
      <p>Here's a list of all performances.</p>
      <p>To delete a performance, click on "delete".</p>
      <DeletePerformance />
      <br />
      <p>Click add performance to add a new performance</p>
      <CreatePerformance />
      <br />
      <p>Click add festival to add a new festival</p>
      <CreateFestival />
      <br />
      <p>Click add guest to add a new guest</p>
      <CreateGuest />
    </div>
  );
}

export default AdminProfile;
