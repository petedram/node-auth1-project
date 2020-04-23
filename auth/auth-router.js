const router = require('express').Router();

const bcrypt = require('bcryptjs');

// const Users = require('../users/users-model.js');

//Path:  /auth/auth-router

router.get('/', (req, res) => {

    res.status(201).json({message: 'hello world!'});
});


  module.exports = router;
