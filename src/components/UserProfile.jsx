import React from "react";
import { useEffect, useState } from "react";
import GetAssignedPerformance from "./GetAssignedPerformance";
import "../styles/style.module.css";

function UserProfile(props) {
  const [guests, setGuest] = useState([]);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    showGuests();
  }, []);

  const showGuests = async () => {
    const response = await fetch(
      "http://localhost:8080/movie_festival_war_exploded/api/festival/performance"
    );
    setGuest(await response.json());
  };

  const onClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1>Welcome to your profile page</h1>
      <p>Click button to show available performances.</p>
      <button onClick={onClick}>Click me</button>

      {showForm && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Duration</th>
                <th>Location</th>
                <th>Start date</th>
                <th>Start time</th>
              </tr>
            </thead>
            {guests.map((guest) => {
              return (
                <tbody key={guest.id}>
                  <tr>
                    <td>{guest.name}</td>
                    <td>{guest.duration}</td>
                    <td>{guest.location}</td>
                    <td>{guest.startDate}</td>
                    <td>{guest.startTime}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
      <GetAssignedPerformance />
    </div>
  );
}
export default UserProfile;
