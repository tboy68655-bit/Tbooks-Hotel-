import { useState } from "react";

export default function RoomCard({ room }) {
  const [fav, setFav] = useState(false);
  return (
    <article className="card">
      <img src={room.img} alt={room.name} />
      <div className="card-body">
        <h3>{room.name}</h3>
        <p>{room.desc}</p>
        <p className="price">₦{room.price.toLocaleString()} <small>per night</small></p>
        <div className="row">
          <button className="btn" onClick={() => alert(`${room.name} selected. Call 08164464193 to confirm.`)}>Book now</button>
          <button className={fav ? "btn ghost on" : "btn ghost"} onClick={() => setFav(!fav)}>{fav ? "♥ Saved" : "♡ Save"}</button>
        </div>
      </div>
    </article>
  );
}
