import { useState } from "react";
import UserCard from "./UserCard";

export default function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="formulaire">
      <UserCard name={name} role={role} />
      <form className="name-form">
        <label htmlFor="Name">Name : </label>
        <input 
          id="Name"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            if (event.currentTarget.value.length < 20)
              setName(event.currentTarget.value);
            else console.error("length must be between 1 and 20 characters");
          }}
        />
         <br/>
         <br/>
         <br/>

        <label htmlFor="Password">Password : </label>
        <input
         id="Password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.currentTarget.value);
          }}
        />
        <br/>
        <br/>
        <br/>

        <label htmlFor="Role">Role : </label>
        <select
         id="Role"
          name="role"
          onChange={(event) => {
            setRole(event.currentTarget.value);
          }}
        >
          <option value="chomeur">Chomeur</option>
          <option value="khedam">Khedam</option>
          <option value="ra9ed">Ra9ed</option>
        </select>
      </form>
    </div>
  );
}
