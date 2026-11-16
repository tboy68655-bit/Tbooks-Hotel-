import { useState } from "react";
import RoomCard from "../components/RoomCard.jsx";
import { rooms } from "../data/rooms.js";

export default function Rooms() {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...new Set(rooms.map((r) => r.type))];
  const shown = filter === "All" ? rooms : rooms.filter((r) => r.type === filter);
  return (
    <section className="section">
      <h1>Our rooms</h1>
      <div className="row">
        {types.map((t) => (
          <button key={t} className={t === filter ? "btn" : "btn ghost"} onClick={() => setFilter(t)}>{t}</button>
        ))}
      </div>
      <div className="grid">{shown.map((r) => <RoomCard key={r.id} room={r} />)}</div>
    </section>
  );
}
