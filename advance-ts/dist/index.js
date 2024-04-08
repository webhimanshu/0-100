"use strict";
function updateUser(updateProps) {
    console.log('Email--->', updateProps.email);
    console.log('name--->', updateProps.name);
    console.log('age--->', updateProps.age);
}
updateUser({
    name: "himahsu",
    age: 44,
    email: "hmj@hj.com"
});
