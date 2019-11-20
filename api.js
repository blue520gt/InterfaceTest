// import { document } from "./document"
const document = require("./document").document

const axios = require("axios");
var time1 = new Date().getTime();


//后台登录
// function api_request(){

// }


// let api_request = function (iname) {
//     axios.request(document[iname].param)//object和数组[]操作符含义相同
//         .then(function (response) {
//             console.log(document[iname].name);
//             console.log("Success:" + response.status);
//             console.log("Time:" + (new Date().getTime() - time1) / 1000 + " s");
//             console.log("-----------------------");

//         })
//         .catch(err => {
//             console.log(document[iname].name);
//             console.log("Fail:" + err);
//             console.log("-----------------------");
//         });

// }


let api_request = function (iname, unip = "") {
    //new A 含义：创建一个特殊的object A
    return new Promise((resolve, reject) => {
        let param = document[iname].param
        if (iname == "login") param.params.captcha = unip
        console.log(iname + " " + JSON.stringify(param))
        axios.request(param)//object和数组[]操作符含义相同
            .then(function (response) {
                console.log(document[iname].name);
                console.log("Success:" + response.status);
                console.log("Time:" + (new Date().getTime() - time1) / 1000 + " s");
                console.log("-----------------------");
                resolve(response)
            })
            .catch(err => {
                console.log(document[iname].name);
                console.log("Fail:" + err);
                console.log("-----------------------");
                reject(err)
            });
    })
}

exports.api_request = api_request
