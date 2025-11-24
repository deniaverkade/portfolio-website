import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form >
      <div>
        <label>
          Naam:<br></br>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Telefoonnummer:<br></br>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <label>
          Emailadress:
          <br></br><input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <label>
          Bericht:<br></br>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <input className="subres1" type="submit" value="Versturen"/>
        

      </div>

    </form>
  );
};

export default ContactForm;