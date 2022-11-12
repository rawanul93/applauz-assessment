const users = require("../../models/users.model");

const loginWithEmailAndPassword = (req, res) => {
    const { email, password } = req.body;
    let loggedInUser = {};

    loggedInUser = users.find(user => {
        return (user.email === email) && (user.password === password);
    });

    if(!loggedInUser){ 
        res.status(400).json({
            error: 'Incorrect email and/or password',
      });
    };

    res.send(loggedInUser);

};

module.exports = {loginWithEmailAndPassword}; 