
"use strict";

const loginForm = document.querySelector("#loginButton");

loginForm.onsubmit = function (event) {

    event.preventDefault();

    const loginData = {
        username: loginForm.username.value,
        password: loginForm.password.value,
    }

    loginForm.loginButton.disabled = true;

    login(loginData);
};
