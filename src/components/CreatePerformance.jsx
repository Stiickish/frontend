import React from "react";
import { useState, useEffect } from "react";
import { ApiPost } from "../utils/apiFetcher";

function CreatePerformance() {
  const [performance, setPerformances] = useState();

  useEffect(() => {}, []);

  const onChange = (event) => {
    const value = event.target.value;
    const propertyName = event.target.name;
    setPerformances({ ...performance, [propertyName]: value });
  };

  const onClick = () => {
    ApiPost("/api/festival/createPerformance", setPerformances, performance);
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input name="name" type="text" onChange={onChange} />
        <label>Duration</label>
        <input name="duration" type="text" onChange={onChange} />
        <label>Location</label>
        <input name="location" type="text" onChange={onChange} />
        <label>Start date</label>
        <input name="startDate" type="text" onChange={onChange} />
        <label>Start time</label>
        <input name="startTime" type="text" onChange={onChange} />
      </form>
      <button onClick={onClick}>Add Performance</button>
    </div>
  );
}

export default CreatePerformance;
