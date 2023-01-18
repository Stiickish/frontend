import React from "react";
import { useEffect, useState } from "react";
import { ApiPost } from "../utils/apiFetcher";

function CreateGuest() {
  const [guest, setGuest] = useState();

  useEffect(() => {}, []);

  const onChange = (event) => {
    const value = event.target.value;
    const propertyName = event.target.name;
    setGuest({ ...guest, [propertyName]: value });
  };

  const onClick = () => {
    ApiPost("/api/festival/createGuest", setGuest, guest);
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input name="name" type="text" onChange={onChange} />
        <label>Phone</label>
        <input name="phone" type="text" onChange={onChange} />
        <label>Email</label>
        <input name="email" type="text" onChange={onChange} />
        <label>Status</label>
        <input name="status" type="text" onChange={onChange} />
      </form>
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
}

export default CreateGuest;
