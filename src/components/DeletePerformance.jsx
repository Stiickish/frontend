import React from "react";
import { useEffect, useState } from "react";

function DeletePerformance() {
  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:8080/movie_festival_war_exploded/api/festival/performance"
    )
      .then((data) => data.json())
      .then((value) => setPerformances(value));
  }, []);

  const removeObject = async (id) => {
    await fetch(
      `http://localhost:8080/movie_festival_war_exploded/api/festival/performance/${id}`,
      {
        method: "DELETE",
      }
    );
    setPerformances(
      performances.filter((performance) => {
        performance.id !== id;
      })
    );
  };
  return (
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
        {performances.map((performance) => {
          return (
            <tbody key={performance.id}>
              <tr>
                <td>{performance.id}</td>
                <td>{performance.duration}</td>
                <td>{performance.location}</td>
                <td>{performance.startDate}</td>
                <td>{performance.startTime}</td>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    removeObject(performance.id);
                  }}
                >
                  Delete
                </button>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default DeletePerformance;
