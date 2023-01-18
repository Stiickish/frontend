import React from "react";
import { useState, useEffect } from "react";

function GetAssignedPerformance() {
  const [guests, setGuest] = useState([]);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    showGuests();
  }, []);

  const showGuests = async (name) => {
    const response = await fetch(
      `http://localhost:8080/movie_festival_war_exploded/api/festival/guest/${name}`
    );
    setGuest(await response.json());
  };

  const onClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <p>Click button to show assigned performances.</p>
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
    </div>
  );
}

export default GetAssignedPerformance;
