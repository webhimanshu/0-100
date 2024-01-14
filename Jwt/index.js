const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 7689;
const SECRET_KEY = '7Hk2LpRn5Qt8WvYz1Fc4AeXg7Aj0Ds5G';
app.use(express.json());

const ALL_USERS = [{ // in memory
    username: "Devoid",
    password: "adshjjhb7868&",
    name: 'Himanshu'
},
{
    username: "_sonu",
    password: "jhgjhgf66t87&",
    name: 'Sonu'
},
{
    username: "vairagi",
    password: "hjdkh&",
    name: 'Vairagi'
}];

function userExits(username, password) {
    let userExits = false;
    for (i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username === username) {
            userExits = true;
        }
    }
    return userExits;
}

app.get('/users', (req, resp) => {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const username = decoded.username;
        resp.status(200).json({ //return a list of users  other than this username
            result: ALL_USERS.filter((value) => {
                if (value.username == username) {
                    return false;
                } else {
                    return true;
                }
            })
        })
    } catch (err) {
        resp.status(403).json({ msg: "Invalid token" });
    }

});

app.post('/users', (req, resp) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExits(username, password)) {
        resp.status(404).json({ msg: 'User does not exist.' })
    }


    const token = jwt.sign({ username: username }, SECRET_KEY);// create token and return
    resp.json({ token });
})

app.listen(PORT, function () {
    console.log('--- SERVER IS RUNNING ---')
})