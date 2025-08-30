import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "58388de2-e6e1-45cc-a353-b10a45d06e6a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Le message a bien été envoyé !");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <form onSubmit={onSubmit}>
          <label htmlFor="">
            Nom prénom - ou Société :
            <input type="text" name="name" required />
          </label>
          <label htmlFor="">
            Adresse mail :
            <input type="email" name="email" required />
          </label>
          <label htmlFor="">
            Message :
            <textarea name="message" type="text" rows="8" required></textarea>
          </label>

          <button className="contact-button" type="submit">
            ENVOYER
          </button>
        </form>
        <span>{result}</span>
      </div>
      <div className="contact-picture">
        <img
          src="/photo-davina-crahet.webp"
          alt="Photo de profil de Davina Crahet"
        />
      </div>
    </div>
  );
};

export default Contact;
