import React from "react";
import { useState, useEffect } from "react";
import { ApiPost } from "../utils/apiFetcher";

function CreateFestival() {
  const [festival, setFestival] = useState();

  useEffect(() => {}, []);

  const onChange = (event) => {
    const value = event.target.value;
    const propertyName = event.target.name;
    setFestival({ ...festival, [propertyName]: value });
  };

  const onClick = () => {
    ApiPost("/api/festival/createFestival", setFestival, festival);
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input name="name" type="text" onChange={onChange} />
        <label>City</label>
        <input name="city" type="text" onChange={onChange} />
        <label>Start date</label>
        <input name="startDate" type="text" onChange={onChange} />
        <label>Duration</label>
        <input name="duration" type="text" onChange={onChange} />
      </form>
      <button onClick={onClick}>Add Festival</button>
    </div>
  );
}

export default CreateFestival;
