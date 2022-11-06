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
      //alert("wrong data");
      res.render("index2.html");
    }
  });


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
