import { useState } from "react";
import { Link } from "react-router-dom";
import RoomCard from "../components/RoomCard.jsx";
import { rooms } from "../data/rooms.js";

export default function Home() {
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [msg, setMsg] = useState("");
  const features = ["Free Wi-Fi", "24/7 power and security", "Restaurant and bar", "Airport pickup"];

  const check = (e) => {
    e.preventDefault();
    setMsg(checkIn ? `Rooms are open for ${guests} guest(s) from ${checkIn}. Pick a room below.` : "Please choose a check-in date.");
  };

  return (
    <>
      <section className="hero">
        <div>
          <h1>Welcome to TBook Hotel</h1>
          <p>Comfortable rooms, warm service and fair prices. TBook Hotel is where you rest well, whether you are here for a night or a month.</p>
          <Link to="/rooms" className="btn">View rooms</Link>
        </div>
        <img src={`${import.meta.env.BASE_URL}img/hero.svg`} alt="TBook Hotel room" />
      </section>

      <section className="section">
        <form className="booking" onSubmit={check}>
          <label>Check-in<input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} /></label>
          <div className="counter">
            <span>Guests</span>
            <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))}>−</button>
            <b>{guests}</b>
            <button type="button" onClick={() => setGuests(guests + 1)}>+</button>
          </div>
          <button className="btn" type="submit">Check availability</button>
        </form>
        {msg && <p className="note">{msg}</p>}
      </section>

      <section className="section">
        <h2>Why guests choose us</h2>
        <ul className="features">{features.map((f) => <li key={f}>{f}</li>)}</ul>
      </section>

      <section className="section">
        <h2>Popular rooms</h2>
        <div className="grid">{rooms.slice(0, 2).map((r) => <RoomCard key={r.id} room={r} />)}</div>
      </section>
    </>
  );
}
