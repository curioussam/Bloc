const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'root',
    database : 'meetup'
  }
});

// console.log(db.select("*").from("users"));

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send(db.users) })
app.get('/', (req, res)=> { res.send('root') })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})


app.post('/meet/:id', (req, res) => {
  const { id } = req.params;
  const { meet_time, destination, messages } = req.body;
  if (!meet_time || !destination || !messages) {
    return res.status(400).json('incorrect form submission');
  }
  console.log('im here');
  return db('meet')
  .returning('*')
  .insert({
			id: id,
			meet_time: meet_time,
			messages: messages,
			destination: destination,
			issue_time: new Date()
  })
  .then(post => {
	  res.json(post[0]);
	})
	.catch(err => res.status(400).json('unable to post'))
})

app.get('/home/:id', (req, res) => {
	return db('meet')
	.orderBy('num', 'desc')
	.then(post => {
	  res.json(post);
	})
	.catch(err => res.status(400).json('unable to post'))
})

// app.post('/register', (req, res) => {
//   const { email, name, password } = req.body;
  
//   return db('users')
//   .returning('*')
//   .insert({
//     email: email[0],
//     name: name,
//     joined: new Date()
//   })
// 	.then(user => {
// 	  res.json(user[0]);
// 	})
// 	.catch(err => res.status(400).json('unable to register'))
// })
//
// app.get('/profile/:userId', (req, res) => {
//   database.users.forEach(user => {
//     if (user.id === req.params.userId) {
//       return res.json(user);
//     }
//   })
//app post-> /meet/:id
//app post-> /signin return the mesgs
//{id,issue time,mesgs,meet time,distinnation
//
//} 

app.listen(3001, ()=> {
  console.log('app is running on port 3001');
})
