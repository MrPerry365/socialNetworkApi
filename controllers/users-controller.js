const {user} = require('../models/user');

const usersController = {
    getAllUsers: (req, res) => {
        user.find({}, (err, users) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(users);
            }
        });
    },
    getUserById: (req, res) => {
        user.findById(req.params.id, (err, user) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(user);
            }
        });
    }, else {
        res.status(404).send('User not found');
    },
    createUser: (req, res) => {
        user.create(req.body, (err, user) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(user);
            }
        });
    }, else {
        res.status(400).send('Bad request');
    },
    updateUser: (req, res) => {
        user.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(user);
            }
        });
    }, else {
        res.status(404).send('User not found');
    },
    deleteUser: (req, res) => {
        user.findByIdAndDelete(req.params.id, (err, user) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(user);
            }
        });
    }, else {
        res.status(404).send('User not found');
    }

   };