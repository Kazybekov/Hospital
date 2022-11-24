const getloginpage = async () => {
    try {
      fetch("http://localhost:1234/login");
    } catch (err) {
      console.error(err.message);
    }
  };

function adminpage() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/styleadminpage.css" />
        <header>
          <div>
            <a href="/">DenSys.me</a>
          </div>
        </header>
        <div className="container" id="container1">
          <a> Admin page </a>
        </div>
        <div className="container" id="container2">
          <div className="block" id="block1">
          </div>
          <div className="block" id="block2">
            <ul>
              <li>Name:  Admin</li>
              <li>Surname: Admin</li>
              <li>Age: 33 </li>
              <li>User ID: admin123 </li>
              <li>Email: admin@nu.edu.kz</li>
              <li>Phone number:  8777 777 77 77</li>
            </ul>
          </div>
        </div>
        <div className="container" id="container3">
          <div className="block" id="block3">
            <button onclick="location.href='/registerdoctor'" className="button button1"> Register Doctor</button>
          </div>
          <div className="block" id="block4">
            <button onclick="location.href='/registerpatient'" className="button button2">Register Patient</button>
          </div>
        </div>
        <a> Doctors </a>
        <div className="container" id="container4">
        </div>
        <a> Patients </a>
        <div className="container" id="container5">
        </div>
      </div>
  );
}

export default adminpage;
