const api_request = require("./api").api_request

const idNo = require('readline-sync').question('please enter the idNo\n');


let token;

api_request("login", idNo).then(response => {
    token = response.data;
    console.log("response.data:" + JSON.stringify(response.data));
})