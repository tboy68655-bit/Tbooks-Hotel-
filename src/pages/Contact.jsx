import { useState } from "react";

const empty = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Enter your full name.";
    if (!form.email.trim()) err.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Enter a valid email address.";
    if (!form.subject.trim()) err.subject = "Enter a subject.";
    if (form.message.trim().length < 10) err.message = "Message must be at least 10 characters.";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) { setSent(true); setForm(empty); }
    else setSent(false);
  };

  const field = (name, label, type = "text") => (
    <label>{label}
      <input type={type} name={name} value={form[name]} onChange={handleChange} />
      {errors[name] && <span className="error">{errors[name]}</span>}
    </label>
  );

  return (
    <section className="section contact">
      <div>
        <h1>Contact us</h1>
        <p>Email: <a href="mailto:tboy68655@gmail.com">tboy68655@gmail.com</a></p>
        <p>Phone: <a href="tel:08164464193">08164464193</a></p>
        <p>Reception is open 24 hours.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        {sent && <p className="success">Thank you. Your message has been sent and we will reply soon.</p>}
        {field("name", "Full name")}
        {field("email", "Email address", "email")}
        {field("subject", "Subject")}
        <label>Message
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button className="btn" type="submit">Send message</button>
      </form>
    </section>
  );
}
