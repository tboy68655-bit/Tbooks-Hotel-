const blocks = [
  { title: "What we do", text: "TBook Hotel offers clean, secure rooms and suites, a restaurant and event space for travellers, families and business guests." },
  { title: "Our story", text: "TBook Hotel started with one idea: booking a good room should be simple and honest. We grew from a small guest house into a full hotel." },
  { title: "Mission", text: "To give every guest a comfortable stay and friendly service at a fair price." },
  { title: "Vision", text: "To be the first hotel people think of when they need a place to rest." },
];

function Block({ title, text }) {
  return <div className="block"><h3>{title}</h3><p>{text}</p></div>;
}

export default function About() {
  return (
    <section className="section">
      <h1>About TBook Hotel</h1>
      <div className="grid">{blocks.map((b) => <Block key={b.title} {...b} />)}</div>
    </section>
  );
}
