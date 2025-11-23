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
    <form>
      <div>
        <label>
          Naam:
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
          Email:
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <label>
          Bericht:
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <h3>Preview:</h3>
        <p>Naam: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Bericht: {formData.message}</p>
      </div>
    </form>
  );
};

export default ContactForm;