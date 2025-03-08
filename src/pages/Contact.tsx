import { useState } from "react";


export default function Contact() {
  // [variable, methodToUpdate] = useState('initialValue);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (event: any) => {
      event.preventDefault();

      console.log(name);
      console.log(email); 
      // console.log(message);

      console.log("Form Submitted ")
    };

    const handleInputChange = (event: any) => {
      console.log(event.target.value);
      const { name, value} = event.target;

      setFormState({ ...formState, [name]: value });
      /*
      if (name === 'name') {
        setName(value);
      } else if (name === 'email') {
        setEmail(value);
      } else if (name === 'message') {
        setMessage(value);
      }
        */
    }


    return (
      <div className="contact-page">
        <h1>Contact Page</h1>
        <p>
          Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
          molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
          magna a ultrices. Aenean pellentesque placerat lacus imperdiet
          efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
          mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
          posuere, eget tristique dui dapibus. Maecenas fermentum elementum
          faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
          ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
          dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
          rhoncus. Etiam vel condimentum magna, quis tempor nulla.
        </p>

        <div className="contact">
          <form className="contact-form" onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              className="name" 
              id="name" 
              name="name"
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input 
              type="text" 
              className="email" 
              id="email" 
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="message">Message:</label>
            <input 
              type="text" 
              className="message" 
              id="message" 
              name="message"
              onChange={handleInputChange}
              />

            <button type="submit" onClick={handleSubmit}>Submit</button>
          </form>
        </div>

        <div>
          <h2>{name}</h2>
          <h2>{email}</h2>
          {/* <h2>{message}</h2> */}
        </div>
      </div>
    );
  }
  