const express = require("express");
const { pool } = require("./dbConfig");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
require("dotenv").config();
const app = express();


const PORT = 1234 ;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//const initializePassport = require("./passportConfig");
//
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/es',es.postesdata);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

// app.use(
//   session({
//     // Key we want to keep secret which will encrypt all of our information
//     secret: process.env.SESSION_SECRET,
//     // Should we resave our session variables if nothing has changes which we dont
//     resave: false,
//     // Save empty value if there is no vaue which we do not want to do
//     saveUninitialized: false
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());



app.get("/spec", async(req,res) => {

  const p = await pool.query('select doctor.tcategory from doctor');
  //console.log(p.rowCount);
  // for (let i=1;i<=p.rowCount;i++){
  // p.rows[i].id=i;
  // }

  res.json(p.rows);

})



app.get("/view/doctors", async (req, res) => {
  //const iin=123
  const p =  await pool.query('select doctor.tname,doctor.tphoto,doctor.trating, doctor.tprice from doctor;')

  res.json(p.rows[0]);

});

// update patient emergency number

app.put("/patient/update/temergencycontact/:iin", (req, res) => {

  const {iin} =req.params;
  //console.log(req.body.number);
  const newn = req.body.number;

  console.log(newn)
  //const iin=123
  const p =  pool.query('UPDATE patient SET temergencycontact = $1 WHERE tiin = $2;',[newn,iin])

  console.log("Emergency contact number was updated")

  res.json("Emergency contact number was updated")
d
});

// view doctor

app.get("/view/doctorlist", async (req, res) => {
  //const {iin} =req.params;
  //const iin=123
  const p =  await pool.query('select doctor.tname from doctor')

  res.json(p.rows);

});

app.get("/view/doctor/:iin", async (req, res) => {
  const {iin} =req.params;
  //const iin=123
  const p =  await pool.query('select * from doctor where tiin=$1;',[iin])

  res.json(p.rows[0]);

});

// view patient

app.get("/view/patient/:iin", async (req, res) => {

  const {iin} =req.params;
  //const iin=123
  const p =  await pool.query('select * from patient where tiin=$1;',[iin])

  res.json(p.rows[0]);

});

//register doctor

app.post("/register/doctor",  (req, res) => {
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
              res.json("added")
            }
          );

});

// patient register

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

// Admin/patient/doctor login

app.post("/users/login", async (req, res) => {



  console.log(req.body)
  //
  let log = {
    login: req.body.login,
    password: req.body.password
  }
  //
  console.log(log.login, log.password)
  //
  // console.log(log.login + " " + log.password);
  if(log.login!=log.password){
    res.json("NO");
  }
  else{

  pool.query('SELECT * FROM admin WHERE "tname" = $1 AND "tpassword" = $2', [log.login,log.password], (err, res2) => {
    if (err) {
      console.log("ingore");
      console.log(err);
    } else if (res2.rows[0].tname == log.login && res2.rows[0].tpassword == log.password) {
      let answer={
        message:"SUCCESS"
      }
      res.json(answer)
      //res.render("adminpage.html");
    }
  });
}
  //
  // pool.query('(select * from patientlogin where tname=$1 and tpassword=$2)', [log.login, log.password], (err, res2) => {
  //   if (err) {
  //     console.log(err);
  //   } else if (res2.rows[0].tname == log.login && res2.rows[0].tpassword == log.password) {
  //     res.message("SUCCESS")
  //   }
  // });
  // pool.query('(select * from doctorlogin where tname=$1 and tpassword=$2)', [log.login, log.password], (err, res2) => {
  //   if (err) {
  //     console.log(err);
  //   } else if (res2.rows[0].tname == log.login && res2.rows[0].tpassword == log.password) {
  //     res.message("SUCCESS")
  //   }
  // });
  // // no such a user

});





// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect("/users/dashboard");
//   }
//   next();
// }
//
// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/users/login");
// }

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
