import React from "react";
import "./css/Stats.css";
import { useNames } from "../Context/NameContext";

const Stats = () => {
  const { names } = useNames();
  return (
    <div className="stats container">
      <table className="name-stats">
      <thead>
        <tr>
          <th>Name</th>
          <th>Times picked</th>
        </tr>
      </thead>
      <tbody>
        {names.map((nameObj) => {
          return (
            <tr>
              <td>{nameObj.name}</td>
              <td>{nameObj.timesPicked}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  );
};

export default Stats;
