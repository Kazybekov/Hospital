const express = require("express");
const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
require("dotenv").config();
const app = express();

const bodyParser = require("body-parser");


const PORT = 1234 ;

const initializePassport = require("./passportConfig");

//initializePassport(passport);

// Middleware

// Parses details from a form
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
//app.set("front", "ejs");

//app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: process.env.SESSION_SECRET,
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false
  })
);
// Funtion inside passport which initializes passport
app.use(passport.initialize());
// Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(passport.session());
app.use(flash());

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/login", (req, res) => {
  res.render("index2.html");
});

app.get("/registerdoctor", (req, res) => {
  res.render("registrationdoctor.html");
});

app.get("/registerpatient", (req, res) => {
  res.render("registrationpatient.html");
});

app.get("/viewdoctor", (req, res) => {
  res.render("viewdoctor.html");
});

app.put("/patient/update/temergencycontact/:iin", (req, res) => {

  const {iin} =req.params;
  //console.log(req.body.number);
  const newn = req.body.number;
  //const iin=123
  const p =  pool.query('UPDATE patient SET temergencycontact = $1 WHERE tiin = $2',[newn,iin])

  res.json("Emergency contact number was updated")

});


app.get("/view/doctor/:iin", async (req, res) => {
  const {iin} =req.params;
  //const iin=123
  const p =  await pool.query('select * from doctor where tiin=$1',[iin])

  res.json(p.rows[0]);

});

app.get("/viewpatient", (req, res) => {
  res.render("viewpatient.html");
});

app.get("/view/patient/:iin", async (req, res) => {

  const {iin} =req.params;
  //const iin=123
  const p =  await pool.query('select * from patient where tiin=$1',[iin])

  res.json(p.rows[0]);

});

// Admin login

app.post("/users/login", async (req,res)=>{

  let log={
    login:req.body.login,
    password:req.body.password
  }

  console.log(log.login+" "+log.password);


  pool.query('(select * from admin where tname=$1 and tpassword=$2)', [log.login,log.password],(err,res2)=>{

    if(err){
      console.log(err);
    }
    try{
      if(res2.rows[0].tname==log.login && res2.rows[0].tpassword==log.password){
        res.render("adminpage.html");
      }
    }catch{
      // alert("wrong data");
      res.render("index2.html");
    }
  });

// doctor register

app.post("/register/doctor", async (req, res) => {

  console.log("yeah");
  let data={
    bdate:req.body.bdate,
    iin:req.body.iin,
    id:req.body.id,
    name:req.body.name,
    surname:req.body.surname,
    middlename:req.body.middlename,
    number:req.body.number,
    department_id:req.body.department_id,
    spec_id:req.body.spec_id,
    experience:req.body.experience,
    photo:req.body.photo,
    category:req.body.category,
    price:req.body.price,
    schedule:req.body.schedule,
    degree:req.body.degree,
    radio:req.body.radio,
    adress:req.body.adress,
    url:req.body.url,
  }
  pool.query(
      `SELECT * FROM doctor
        WHERE tiin = $1`,
      [data.iin],
      (err, results) => {
        if (err) {
          console.log(err);
        }

    if (results.rows.length > 0) {
          return res.render("/", {
            message: "Email already registered"
          });
    } else {

          pool.query(
            `INSERT INTO doctor (tbirthdate, tiin, tid,tname , tsurname, tmiddlename, tcontact,tdepid ,tspecdetid ,texpirience
               ,tphoto ,tcategory, tprice ,tschedule , tdegree ,trating ,taddress,turl )
                VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)
                RETURNING tname,tiin`,
            [data.bdate,data.iin,data.id,
              data.name,data.surname,data.middlename,
              data.number,data.department_id,data.spec_id,
              data.experience,data.photo,data.category,
              data.price,data.schedule,data.degree,
              data.radio,data.adress,data.url],
            (err, results) => {
              if (err) {
                throw err;
              }
              req.flash("success_msg", "Doctor was registered");
              res.render("adminpage.html");
            }
          );
        }
      }
    );
});


app.post("/register/patient", async (req, res) => {

  console.log("yeah");
  let data={
    bdate:req.body.bdate,
    iin:req.body.iin,
    id:req.body.id,
    name:req.body.name,
    surname:req.body.surname,
    middlename:req.body.middlename,
    bloodgroup:req.body.bloodgroup,
    contact_e:req.body.contact_e,
    contact:req.body.contact,
    email:req.body.email,
    adress:req.body.adress,
    marital:req.body.marital,
    reg_date:req.body.reg_date,
  }
  pool.query(
      `SELECT * FROM patient
        WHERE tiin = $1`,
      [data.iin],
      (err, results) => {
        if (err) {
          console.log(err);
        }

    if (results.rows.length > 0) {
          return res.render("/", {
            message: "Patient already registered"
          });
    } else {

          pool.query(
            `INSERT INTO patient (tbirthdate , tiin , tid , tname , tsurname , tmiddlename ,tblood , temergencycontact , tcontact , temail , tadress , tmaritalstatus , tregistrationdate )
                VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
            [data.bdate,data.iin,data.id,
              data.name,data.surname,data.middlename,
              data.bloodgroup,data.contact_e,data.contact,
              data.email,data.adress,data.marital,
              data.reg_date],
            (err, results) => {
              if (err) {
                throw err;
              }
              req.flash("success_msg", "Patient was registered");
              res.render("adminpage.html");
            }
          );
        }
      }
    );
});





// app.get("/users/register", checkAuthenticated, (req, res) => {
//   res.render("register.ejs");
// });




// app.get("/login/login",
//   checkAuthenticated, (req, res) => {
//   console.log(req.session.flash.error);
//   res.render("adminpage.html");
// });

// app.get("/users/dashboard", checkNotAuthenticated, (req, res) => {
//   console.log(req.isAuthenticated());
//   res.render("dashboard", { user: req.user.name });
// });

// app.get("/users/logout", (req, res) => {
//   req.logout();
//   res.render("index", { message: "You have logged out successfully" });
// });


// app.post("/users/register", async (req, res) => {
//   let { name, email, password, password2 } = req.body;
//
//   let errors = [];
//
//   console.log({
//     name,
//     email,
//     password,
//     password2
//   });
//
//   if (!name || !email || !password || !password2) {
//     errors.push({ message: "Please enter all fields" });
//   }
//
//   if (password.length < 6) {
//     errors.push({ message: "Password must be a least 6 characters long" });
//   }
//
//   if (password !== password2) {
//     errors.push({ message: "Passwords do not match" });
//   }
//
//   if (errors.length > 0) {
//     res.render("register", { errors, name, email, password, password2 });
//   } else {
//
//     hashedPassword = await bcrypt.hash(password, 10);
//
//     console.log(hashedPassword);
//
//     // Validation passed
//
//     pool.query(
//       `SELECT * FROM users
//         WHERE email = $1`,
//       [email],
//       (err, results) => {
//         if (err) {
//           console.log(err);
//         }
//         console.log(results.rows);
//
//         if (results.rows.length > 0) {
//           return res.render("register", {
//             message: "Email already registered"
//           });
//         } else {
//           pool.query(
//             `INSERT INTO users (name, email, password)
//                 VALUES ($1, $2, $3)
//                 RETURNING id, password`,
//             [name, email, hashedPassword],
//             (err, results) => {
//               if (err) {
//                 throw err;
//               }
//               console.log(results.rows);
//               req.flash("success_msg", "You are now registered. Please log in");
//               res.redirect("/users/login");
//             }
//           );
//         }
//       }
//     );
//   }
// });



});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/dashboard");
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/login");
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
