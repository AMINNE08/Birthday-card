import { useState } from "react";
import "./App.css";
import data from "./data.js";

export default function App() {
  const [contain, setContain] = useState(data);

  return (
    <div className="container">
      <h1>{contain.length} birthdays today</h1>
      {contain.length > 0 ? (
        <div>
          {contain.map((item) => (
            <div key={item.id} className="birthday-item">
              <div className="content">
                <img src={item.image} alt={item.name} />
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.message}</p>
                  <p>{item.age}years</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No birthdays today.</p>
      )}
      <button onClick={() => setContain([])}>Clear All</button>
    </div>
  );
}
