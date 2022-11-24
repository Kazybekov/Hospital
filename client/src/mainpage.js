const getloginpage = async () => {
    try {
      fetch("http://localhost:1234/login");
    } catch (err) {
      console.error(err.message);
    }
  };

function mainpage() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/css/stylecss.css" />
      <header>
        <div>
          <a href="index.html" >DenSys.me</a>
        </div>
      </header>
      <div>
        <nav>
          <ul>
            <li>
              <a className="active" href="index.html"> HOME </a>
            </li>
            <li>
              <a href="#"> ABOUT US </a>
            </li>
            <li>
              <a href="#"> DEPARTMENTS </a>
            </li>
            <li>
              <a href="#"> SERVICES </a>
            </li>
            <li>
              <a href="#"> DOCTORS </a>
            </li>
            <li>
              <a href="#"> CONTACT </a>
            </li>
            <li>
              <a href="#"> MAKE AN APPOINTMENT </a>
            </li>
            <li>
              <button onClick={() => getloginpage()}> LOGIN </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default mainpage;
