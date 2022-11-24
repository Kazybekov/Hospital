import {useState} from 'react';


const Regdoctor = () => {

  const [iin, setiin] = useState('');
  const [id, setid] = useState('');

  const handleSubmit = event => {
      console.log('handleSubmit ran');
      event.preventDefault(); // 👈️ prevent page refresh

      // 👇️ access input values here
      console.log('firstName 👉️', iin);
      console.log('lastName 👉️', id);

      // 👇️ clear all input values in the form
      setiin('');
      setid('');
    };

  return (
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/stylelogin.css" />
        <div className="container">
          <div className="title">Registration for doctor</div>
          <div className="content">
            <form onSubmit={handleSubmit} >
              <div className="user-details">

                <div className="input-box">
                  <span className="details">IIN number</span>
                  <input

                  onChange={event => setiin(event.target.value)}
                  value={iin}

                   type="text" placeholder="Enter doctor's IIN number" required />
                </div>
                <div className="input-box">
                  <span className="details">ID number</span>
                  <input
                  onChange={event => setid(event.target.value)}
                  value={id}
                   type="text" placeholder="Enter doctor's ID number" required />
                </div>

                <div className="button">
                  <input type="submit" defaultValue="Register" />
                </div>
              </div>
            </form>
            <div id="containr">
              <a href="registrationpatient.html">Registration for Patient</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Regdoctor;
