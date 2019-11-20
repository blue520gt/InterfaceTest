const axios = require("axios");
// const addr = "http://119.90.57.29:15502";
const addr = "http://newadmin.tjnjs.com";

setTimeout(function () {
    var time1 = new Date().getTime();
    //后台登录页面图形验证码
    axios
        .request({
            url: addr + "/api/captcha.jpg",
            method: "get",
            params: {},
            data: {}
        })
        .then(function (response) {
            //   for (var i = 0; i < response.data.msg.data.length; i++) {
            // console.log(
            //   "answerEval:" + JSON.stringify(response.data.msg.data[i].zcfxxid)
            // );
            //   }
            console.log("后台登录页面图形验证码：");
            console.log("Success:" + response.status);
            console.log("Time:" + (new Date().getTime() - time1) / 1000 + " s");
            console.log("-----------------------");
        })
        .catch(err => {
            console.log("后台登录页面图形验证码：");
            console.log("Fail:" + err);
            console.log("-----------------------");
        });

    //后台登录
    axios
        .request({
            url: addr + "/api/security/login",
            method: "get",
            params: {
                name: "admin",
                passwd: "admin2",
                captcha: "42388"
            },
            data: {}
        })
        .then(function (response) {
            //   for (var i = 0; i < response.data.msg.data.length; i++) {
            // console.log(
            //   "answerEval:" + JSON.stringify(response.data.msg.data[i].zcfxxid)
            // );
            //   }
            console.log("后台登录：");
            console.log("Success:" + response.status);
            console.log("Time:" + (new Date().getTime() - time1) / 1000 + " s");
            console.log("-----------------------");
        })
        .catch(err => {
            console.log("后台登录：");
            console.log("Fail:" + err);
            console.log("-----------------------");
        });

    //资讯管理：查询的接口
    axios.request({
        url: addr + "/api/news/list",
        method: "get",
        params: {
            "types": "2",
            "title": "手机",
            "pageNo": "1",
            "pageSize": "10",
            "totalCount": "103",
            "taskName": "发布",
            "wczt": "1",
            "areaCode": "12",
            "userId": "313"
        },
        data: {
            // "pageNo": 1,
            // "pageSize": 10,
            // "totalCount": 0,
            // "types": "2",
            // "areaCode": "12,1201,120115",
            // "userId": 276
        }
    }).then(function (response) {
        console.log("资讯管理查询的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("资讯管理查询的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //资讯管理：新增的接口
    axios.request({
        url: addr + "/api/news/add",
        method: "get",
        params: {

        },
        data: {
            "areacode": "12,1201,120115",
            "content": "<p>12</p>",
            "createname": "王亚晴",
            "keywords": "12",
            "newstypeid": 2,
            "source": "12",
            "title": "12",
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eXEiLCJleHAiOjE1NDg2NTE5MzgsImlhdCI6MTU0ODA0NzEzOCwianRpIjoiOGY4MTk4YTJiMmRlNGNmNWE4YmIyNzU1YjdiNzc2MDYifQ.NSTqQNnMICoPDeTOMEjBrEy891MjLFbhl3BbMWPtubiKfAWYdMHMATcxKLOpVfOndyHQiVSg07sDC-sRR7yg_Q"
        }
    }).then(function (response) {
        console.log("资讯管理新增的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("资讯管理新增的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //资讯管理：修改的接口
    axios.request({
        url: addr + "/api/news/update",
        method: "get",
        params: {

        },
        data: {
            "areacode": "12,1201,120115",
            "content": "<p>12</p>",
            "createname": "王亚晴",
            "keywords": "12",
            "newstypeid": 2,
            "source": "12",
            "title": "12",
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eXEiLCJleHAiOjE1NDg2NTE5MzgsImlhdCI6MTU0ODA0NzEzOCwianRpIjoiOGY4MTk4YTJiMmRlNGNmNWE4YmIyNzU1YjdiNzc2MDYifQ.NSTqQNnMICoPDeTOMEjBrEy891MjLFbhl3BbMWPtubiKfAWYdMHMATcxKLOpVfOndyHQiVSg07sDC-sRR7yg_Q"
        }
    }).then(function (response) {
        console.log("资讯管理修改的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("资讯管理修改的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //资讯管理：置顶的接口
    axios.request({
        url: addr + "/api/news/updateTop/427",
        method: "get",
        params: {

        },
        data: {}
    }).then(function (response) {
        console.log("资讯管理置顶的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("资讯管理置顶的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //资讯管理：取消置顶的接口
    axios.request({
        url: addr + "/api/news/unUpdateTop/411",
        method: "get",
        params: {

        },
        data: {}
    }).then(function (response) {
        console.log("资讯管理取消置顶的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("资讯管理取消置顶的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //资讯管理：删除的接口
    axios.request({
        url: addr + "/api/news/delete/12",
        method: "get",
        params: {

        },
        data: {}
    }).then(function (response) {
        console.log("资讯管理删除的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("资讯管理删除的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //资讯管理：查看的接口
    axios.request({
        url: addr + "/api/news/view/307",
        method: "get",
        params: {

        },
        data: {}
    }).then(function (response) {
        console.log("资讯管理查看的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("资讯管理查看的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //资讯管理：通过新闻ID查询附件的接口
    axios.request({
        url: addr + "/api/selectByFz",
        method: "post",
        params: {
            "id": 438
        },
        data: {}
    }).then(function (response) {
        console.log("资讯管理通过新闻ID查询附件的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("资讯管理通过新闻ID查询附件的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //新公示公告：新公示公告发布的接口
    axios.request({
        url: addr + "/api/news/updateNewFbzt",
        method: "post",
        params: {
            "id": 520
        },
        data: {}
    }).then(function (response) {
        console.log("新公示公告发布的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("新公示公告发布的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //新公示公告：新公示公告取消发布的接口
    axios.request({
        url: addr + "/api/news/updateNewQxFbzt",
        method: "post",
        params: {
            "id": 520
        },
        data: {}
    }).then(function (response) {
        console.log("新公示公告取消发布的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("新公示公告取消发布的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //公示公告：招标公告查询的接口
    axios.request({
        url: addr + "/api/CqjyGcztb/selectCqjyGcztbPage",
        method: "post",
        params: {

        },
        data: {
            "pageNo": 1,
            "pageSize": 10,
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eXEiLCJleHAiOjE1NDg2MzYxMDAsImlhdCI6MTU0ODAzMTMwMCwianRpIjoiZDcxYjA4NGU2OTJjNDhjNzk3ODA3ZjYxZDg4Mzk1OTgifQ.EsJurO_enpPZ8HqXWnWaql2M7o89J24kWh8I7aWXf8MjJ3tJ5uP5-RPSYNXcPfxQ-Q-jH_gzVcc6y1Km9M0bRg"
        }
    }).then(function (response) {
        console.log("招标公告查询的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("招标公告查询的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //公示公告：招标公告添加的接口
    axios.request({
        url: addr + "/api/CqjyGcztb/addCqjyGcztb",
        method: "post",
        params: {

        },
        data: {
            "zbfmc": "14.23",
            "zjly": "123",
            "lxr": "123",
            "lxtel": "123",
            "lxaddress": "123",
            "zbyj": "123",
            "dlgs": "123",
            "dlgsyj": "123",
            "xmmc": "14.23",
            "zl": "12,1201,120115,120115001,120115001001",
            "jsdd": "123",
            "jsgq": "123",
            "xmzbnr": "123"
        }
    }).then(function (response) {
        console.log("招标公告添加的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("招标公告添加的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //公示公告：招标公告通过id查看的接口
    axios.request({
        url: addr + "/api/CqjyGcztb/selectCqjyGcztbById",
        method: "post",
        params: {

        },
        data: {
            "id": "20"
        }
    }).then(function (response) {
        console.log("招标公告通过id查看的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("招标公告通过id查看的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //公示公告：招标公告修改的接口
    axios.request({
        url: addr + "/api/CqjyGcztb/updateCqjyGcztb",
        method: "post",
        params: {

        },
        data: {
            "id": 100,
            "zbfmc": "头盔",
            "zjly": "头盔",
            "lxr": "习近平头盔",
            "lxtel": "习近平头盔",
            "lxaddress": "习近平头盔",
            "zbyj": "习近平头盔",
            "dlgs": "习近平头盔",
            "dlgsyj": "习近平习近平头盔",
            "xmmc": "习近平习近平头盔",
            "zl": "12",
            "jsdd": "习近平头盔",
            "jsgq": "习近平头盔",
            "xmzbnr": "习近平头盔",
            "zbxdzl": "习近平头盔",
            "zbrzgxq": "习近平头盔",
            "tbbzjje": "1500",
            "zbwjjg": "1500",
            "zbwjlqqsdate": 1568649600000,
            "zbwjlqjzdate": 1568563200000,
            "zbfbdate": 1568736000000,
            "zbjzdate": 1568822400000,
            "zt": "0",
            "xmbh": "TB_2019_2K6XYJMX",
            "cqjyFzList": [],
            "zlList": ["12"],
            "token": null,
            "creatorid": 0,
            "createname": null,
            "createdate": null,
            "xzcode": null,
            "key": null,
            "xzqh": null,
            "type2": null,
            "zsxmbh": null
        }
    }).then(function (response) {
        console.log("招标公告修改的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("招标公告修改的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //公示公告：招标公告中，点击中标公告调用的接口
    axios.request({
        url: addr + "/api/CqjyGczbgg/selectCqjyGcztbAndCqjyGczbggById",
        method: "post",
        params: {

        },
        data: {
            "id": "82 "
        }
    }).then(function (response) {
        console.log("招标公告中，点击中标公告调用的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("招标公告中，点击中标公告调用的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });


    //公示公告：中标公告已存在，确定修改调用的接口
    axios.request({
        url: addr + "/api/CqjyGczbgg/updateCqjyGczbgg",
        method: "post",
        params: {

        },
        data: {
            "id": "12 ",
            "creatorid": 0,
            "gczbggid": 44,
            gcztbid: 74,
            ggtp: null,
            gsjsdate: 1545926400000,
            gsqsdate: 1545840000000,
            hytype: "1",
            jsdw: "1",
            key: null,
            taskId: null,
            taskName: null,
            taskZt: null,
            token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eXEiLCJleHAiOjE1NDg3MjQzMTIsImlhdCI6MTU0ODExOTUxMiwianRpIjoiZTQ2ODgyYTNlMmU5NGM4ZmI3MWVmYTAzZDRiYWQwZTYifQ.fg1AB5Rx0tnPPBJL9l3pyJFFPPld0irPM3Ss7gP7sajvWCydW8Sjp8UTqv7mu7MgKJYuJG0wl31kokbWMw3nYA",
            tstel: "1",
            type2: null,
            xmfzr: "1",
            xzcode: null,
            xzqh: null,
            zbdate: 1546012800000,
            zbf: "1",
            zbjg: "1",
        }
    }).then(function (response) {
        console.log("中标公告已存在，确定修改调用的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("中标公告已存在，确定修改调用的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //公示公告：中标公告不存在，确定调用的添加接口
    axios.request({
        url: addr + "/api/CqjyGczbgg/addCqjyGczbgg",
        method: "post",
        params: {

        },
        data: {
            "id": "12 ",
            "creatorid": 0,
            "gczbggid": 44,
            gcztbid: 74,
            ggtp: null,
            gsjsdate: 1545926400000,
            gsqsdate: 1545840000000,
            hytype: "1",
            jsdw: "1",
            key: null,
            taskId: null,
            taskName: null,
            taskZt: null,
            token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eXEiLCJleHAiOjE1NDg3MjQzMTIsImlhdCI6MTU0ODExOTUxMiwianRpIjoiZTQ2ODgyYTNlMmU5NGM4ZmI3MWVmYTAzZDRiYWQwZTYifQ.fg1AB5Rx0tnPPBJL9l3pyJFFPPld0irPM3Ss7gP7sajvWCydW8Sjp8UTqv7mu7MgKJYuJG0wl31kokbWMw3nYA",
            tstel: "1",
            type2: null,
            xmfzr: "1",
            xzcode: null,
            xzqh: null,
            zbdate: 1546012800000,
            zbf: "1",
            zbjg: "1",
        }
    }).then(function (response) {
        console.log("中标公告不存在，确定调用的添加接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("中标公告不存在，确定调用的添加接口:");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //公示公告：公示公告删除接口
    axios.request({
        url: addr + "/api/CqjyGcztb/deleteCqjyGcztb",
        method: "post",
        params: {

        },
        data: {
            "id": "12 ",
        }
    }).then(function (response) {
        console.log("公示公告删除接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("公示公告删除接口:");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //公示公告：通过项目编号查询公示公告接口
    axios.request({
        url: addr + "/api/MHJjdt/gsgg/selectCjgsByxmbh",
        method: "post",
        params: {

        },
        data: {
            "xmbh": "BD_CQ_2019_S_0125"
        }
    }).then(function (response) {
        console.log("通过项目编号查询公示公告接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("通过项目编号查询公示公告接口:");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //公示公告：查询中标公告接口
    axios.request({
        url: addr + "/api/CqjyGczbgg/selectCqjyGcztbAndCqjyGczbggPage",
        method: "post",
        params: {

        },
        data: {
            "pageNo": 1,
            "pageSize": 1,
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eXEiLCJleHAiOjE1NDg3MjQzMTIsImlhdCI6MTU0ODExOTUxMiwianRpIjoiZTQ2ODgyYTNlMmU5NGM4ZmI3MWVmYTAzZDRiYWQwZTYifQ.fg1AB5Rx0tnPPBJL9l3pyJFFPPld0irPM3Ss7gP7sajvWCydW8Sjp8UTqv7mu7MgKJYuJG0wl31kokbWMw3nYA"
        }
    }).then(function (response) {
        console.log("查询中标公告接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("查询中标公告接口:");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //公示公告：中标公告删除接口
    axios.request({
        url: addr + "/api/CqjyGczbgg/deleteCqjyGczbgg",
        method: "post",
        params: {

        },
        data: {
            "id": "35 ",
        }
    }).then(function (response) {
        console.log("中标公告删除接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("中标公告删除接口:");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //供应管理：查询的接口
    axios.request({
        url: addr + "/api/CqjyCqzcgl/selectZcfxxAndZcxxExtByZcgltypeToPage",
        method: "post",
        params: {
            "pageNo": 1,
            "pageSize": 1,
            "publishstring": "1",
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eXEiLCJleHAiOjE1NDg3MjkwMzAsImlhdCI6MTU0ODEyNDIzMCwianRpIjoiNzJmYzU4Zjg2M2Y2NDk0ZTgzMmViMzEyNWRkNWZhM2EifQ.7M6prVXRUP2BazAV4Ctm3LaQ62X7e4OnIkf4ED61YoJdZ8dIeezk16rI1YfBxgIgT0EETsTu_kWc0bzPadzL6Q",
            "zcgltype": "2"
        },
        data: {
            // "pageNo": 1,
            // "pageSize": 10,
            // "totalCount": 0,
            // "types": "2",
            // "areaCode": "12,1201,120115",
            // "userId": 276
        }
    }).then(function (response) {
        console.log("供应管理查询的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("供应管理查询的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //供应管理：新增的接口
    axios.request({
        url: addr + "/api/CqjyCqzcgl/addCqjyCqzcgl",
        method: "post",
        params: {

        },
        data: {
            "cqjyZcfxx": {
                "type": "1",
                "bdlx": "1",
                "bdlx2": "1",
                "xmbh": "",
                "zcgltype": "1",
                "countmjtype": "1",
                "sfscxmzstp": "1",
                "xzqhList": ["12", "120115", "120115002", "120115002001"],
                "name": "哈哈",
                "tel": "18512345678",
                "lxaddress": "北京市海淀区",
                "idcard": "789456199110100101",
                "countmj": "12.000",
                "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0anMxaiIsImV4cCI6MTU3NDY4MTQwNSwiaWF0IjoxNTc0MDc2NjA1LCJqdGkiOiI0YzQyZDdlNmRkNTA0OWJhYmJkYjExZjJkNzlkMTQ5MyJ9.Q6k0v2oRIW3Sxei7ak8FBQVbNPiU_fEgUtUdlQBLNoETzf4dRANrwrJL5w7urEAfcF5LJmjx-bAvpR20qXtc6w"
            },
            "cqjyTdxxList": [{
                "dkxz": "1",
                "txqlr": "是",
                "ghyq": "符合",
                "tdxz": "1",
                "dl": "其他",
                "zlList": "天津市/宝坻区/宝平街道/华苑小区社区",
                "about": "",
                "myId": 1574079376344,
                "cqjyTdxxDsfzwList": [{
                    "dsfzwname": "地上附着12",
                    "numbercount": "120",
                    "qsgx": "权属"
                }],
                "tdxxTxqlrList": [{}],
                "cbfidcard": 789456199110100200,
                "jyqzbh": "经营20191118",
                "cbfmz": "哈哈",
                "cbftel": "18512345678",
                "dkname": "地块1",
                "mj": 12,
                "zeast": "东",
                "zsouth": "南",
                "zwest": "西",
                "znorth": "北",
                "dj": "等级",
                "qtms": "其他描述",
                "dkbm": ""
            }],
            "cqjyFzList": [],
            "cqjyZcxx": {
                "zctype": "2",
                "sfszczc": "0",
                "sfjnbzj": "1",
                "zffs": "1",
                "jyfs": "2",
                "clfs": "1",
                "jjfs": "1",
                "tdxzlb": "1",
                "jkhrzh": "912002010000022677100",
                "zhmc": "天津农村产权交易所农户承包土地经营权",
                "khyh": "中国邮政储蓄银行股份有限公司天津蓟县支行",
                "xmname": "宝坻区宝平街道华苑小区社区12亩耕地",
                "jnxs": "1",
                "srftj": "自然人需年满18周岁以上、70周岁以下具有完全民事行为能力。",
                "gpjg": "1500",
                "gpjgdw": "2",
                "zrfqttj": "转让相关其他条件",
                "zcyt": "畜牧业",
                "htmb": "87",
                "jybzj": "150",
                "jtjg": "150",
                "gpq": "5"
            },
            "cqjyXmtp": [{
                "url": "/CQZCGL/1574079455507_5.jpg",
                "name": "5.jpg"
            }]
        }
    }).then(function (response) {
        console.log("供应管理新增的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("供应管理新增的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //供应管理：修改的接口
    axios.request({
        url: addr + "/api/CqjyCqzcgl/updateCqjyCqzcgl",
        method: "post",
        params: {

        },
        data: {
            "cqjyZcfxx": {
                "type": "1",
                "bdlx": "1",
                "bdlx2": "1",
                "xmbh": "",
                "zcgltype": "1",
                "countmjtype": "1",
                "sfscxmzstp": "1",
                "xzqhList": ["12", "120115", "120115002", "120115002001"],
                "name": "哈哈",
                "tel": "18512345678",
                "lxaddress": "北京市海淀区",
                "idcard": "789456199110100101",
                "countmj": "12.000",
                "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0anMxaiIsImV4cCI6MTU3NDY4MTQwNSwiaWF0IjoxNTc0MDc2NjA1LCJqdGkiOiI0YzQyZDdlNmRkNTA0OWJhYmJkYjExZjJkNzlkMTQ5MyJ9.Q6k0v2oRIW3Sxei7ak8FBQVbNPiU_fEgUtUdlQBLNoETzf4dRANrwrJL5w7urEAfcF5LJmjx-bAvpR20qXtc6w"
            },
            "cqjyTdxxList": [{
                "dkxz": "1",
                "txqlr": "是",
                "ghyq": "符合",
                "tdxz": "1",
                "dl": "其他",
                "zlList": "天津市/宝坻区/宝平街道/华苑小区社区",
                "about": "",
                "myId": 1574079376344,
                "cqjyTdxxDsfzwList": [{
                    "dsfzwname": "地上附着12",
                    "numbercount": "120",
                    "qsgx": "权属"
                }],
                "tdxxTxqlrList": [{}],
                "cbfidcard": 789456199110100200,
                "jyqzbh": "经营20191118",
                "cbfmz": "哈哈",
                "cbftel": "18512345678",
                "dkname": "地块1",
                "mj": 12,
                "zeast": "东",
                "zsouth": "南",
                "zwest": "西",
                "znorth": "北",
                "dj": "等级",
                "qtms": "其他描述",
                "dkbm": ""
            }],
            "cqjyFzList": [],
            "cqjyZcxx": {
                "zctype": "2",
                "sfszczc": "0",
                "sfjnbzj": "1",
                "zffs": "1",
                "jyfs": "2",
                "clfs": "1",
                "jjfs": "1",
                "tdxzlb": "1",
                "jkhrzh": "912002010000022677100",
                "zhmc": "天津农村产权交易所农户承包土地经营权",
                "khyh": "中国邮政储蓄银行股份有限公司天津蓟县支行",
                "xmname": "宝坻区宝平街道华苑小区社区12亩耕地",
                "jnxs": "1",
                "srftj": "自然人需年满18周岁以上、70周岁以下具有完全民事行为能力。",
                "gpjg": "1500",
                "gpjgdw": "2",
                "zrfqttj": "转让相关其他条件",
                "zcyt": "畜牧业",
                "htmb": "87",
                "jybzj": "150",
                "jtjg": "150",
                "gpq": "5"
            },
            "cqjyXmtp": [{
                "url": "/CQZCGL/1574079455507_5.jpg",
                "name": "5.jpg"
            }]
        }
    }).then(function (response) {
        console.log("供应管理修改的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("供应管理修改的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //供应管理：通过id查询的接口
    axios.request({
        url: addr + "/api/CqjyCqzcgl/selectCqjyCqzcglByIdAndZcgltype",
        method: "post",
        params: {

        },
        data: {
            "id": "620",
            "zcgltype": "2"
        }
    }).then(function (response) {
        console.log("供应管理通过id查询的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("供应管理通过id查询的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //供应管理：置顶的接口
    axios.request({
        url: addr + "/api/CqjyCqzcgl/updateZcfxxZD",
        method: "post",
        params: {

        },
        data: {
            "id": "620",

        }
    }).then(function (response) {
        console.log("供应管理置顶的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("供应管理置顶的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //供应管理：取消置顶的接口
    axios.request({
        url: addr + "/api/CqjyCqzcgl/updateZcfxxQXZD",
        method: "post",
        params: {

        },
        data: {
            "id": "620",

        }
    }).then(function (response) {
        console.log("供应管理取消置顶的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("供应管理取消置顶的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //供应管理：推荐的接口
    axios.request({
        url: addr + "/api/CqjyCqzcgl/updateZcfxxSftjTrue",
        method: "post",
        params: {

        },
        data: {
            "id": "620",
            "tjyy": "123"

        }
    }).then(function (response) {
        console.log("供应管理推荐的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("供应管理推荐的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //供应管理：取消推荐的接口
    axios.request({
        url: addr + "/api/CqjyCqzcgl/updateZcfxxSftjTrue",
        method: "post",
        params: {

        },
        data: {
            "id": "620"

        }
    }).then(function (response) {
        console.log("供应管理取消推荐的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("供应管理取消推荐的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //供应管理：查询所有类别数据的接口
    axios.request({
        url: addr + "/api/CqjyCqzcgl/selectAll",
        method: "post",
        params: {

        },
        data: {
            "pageNo": 1,
            "pageSize": 1,
            "publishstring": "1",
            "totalCount": 0,
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eXEiLCJleHAiOjE1NTQwMTQ5MjcsImlhdCI6MTU1MzQxMDEyNywianRpIjoiZjc5YTIxYTdkYzExNDAzZDgwYThkZWIxMGEzMjQ0YzEifQ.ZrU1YCyWaAzvQiQNjlkIypqrPQuIIsTFYi3M3xX_ktKgGiqfEi0F3lCWC3H5wZ1hhnBowJEG84Inf2HksnOMIA"

        }
    }).then(function (response) {
        console.log("供应管理查询所有类别数据的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("供应管理查询所有类别数据的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //需求管理：查询的接口
    axios.request({
        url: addr + "/api/CqjyCqxqgl/selectCqjyXmxxAndCqjyXqqfxxExtByZcgltypeToPage",
        method: "post",
        params: {

        },
        data: {
            "pageSize": 1,
            "pageNo": 1,
            "fbsjstring": "1",
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eXEiLCJleHAiOjE1NDg4MTAyMTUsImlhdCI6MTU0ODIwNTQxNSwianRpIjoiOGNhMTA2NmI2NzU2NDQxYmIxZGQ2NjhjNTBkNjZhNjQifQ.yym0_A6TJ5r9StgxHklxLMuObGtcFaHNMYO9lHGU1G3P5UPQjd0Ty2bmsviPeBoWH56IcCQSYP9KOB22d--VkQ",
            "zcgltype": "1"
        }
    }).then(function (response) {
        console.log("需求管理查询的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("需求管理查询的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //竞价管理：报名项目查询的接口
    axios.request({
        url: addr + "/api/Bmsh/queryList",
        method: "post",
        params: {

        },
        data: {
            "pageNo": 1,
            "pageSize": 10,
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0anMxaiIsImV4cCI6MTU3NDY4MTQwNSwiaWF0IjoxNTc0MDc2NjA1LCJqdGkiOiI0YzQyZDdlNmRkNTA0OWJhYmJkYjExZjJkNzlkMTQ5MyJ9.Q6k0v2oRIW3Sxei7ak8FBQVbNPiU_fEgUtUdlQBLNoETzf4dRANrwrJL5w7urEAfcF5LJmjx-bAvpR20qXtc6w"
        }
    }).then(function (response) {
        console.log("竞价管理报名项目查询的接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("竞价管理报名项目查询的接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //竞价管理：进入审核列表查询接口
    axios.request({
        url: addr + "/api/JBidinfo/list",
        method: "post",
        params: {

        },
        data: {
            "jjsh": "1",
            "pageNo": 1,
            "pageSize": 10,
            "totalCount": 0,
            "xmbh": "GL_CQ_2019_43Z7Z6WV"
        }
    }).then(function (response) {
        console.log("竞价管理进入审核列表查询接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("竞价管理进入审核列表查询接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //竞价管理：竞价人名单接口
    axios.request({
        url: addr + "/api/Jjrmd/list",
        method: "post",
        params: {

        },
        data: {
            "pageNo": 1,
            "pageSize": 10,
            "totalCount": 0,
            "xmbh": "GL_CQ_2019_43Z7Z6WV"
        }
    }).then(function (response) {
        console.log("竞价管理竞价人名单接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("竞价管理竞价人名单接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //竞价管理：竞价中项目查询接口
    axios.request({
        url: addr + "/api/BZzjjxm/list",
        method: "post",
        params: {

        },
        data: {
            "pageNo": 1,
            "pageSize": 10,
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0anMxaiIsImV4cCI6MTU3NDY4MTQwNSwiaWF0IjoxNTc0MDc2NjA1LCJqdGkiOiI0YzQyZDdlNmRkNTA0OWJhYmJkYjExZjJkNzlkMTQ5MyJ9.Q6k0v2oRIW3Sxei7ak8FBQVbNPiU_fEgUtUdlQBLNoETzf4dRANrwrJL5w7urEAfcF5LJmjx-bAvpR20qXtc6w"
        }
    }).then(function (response) {
        console.log("竞价管理竞价中项目查询接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("竞价管理竞价中项目查询接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //竞价管理：竞价中项目的条件查询接口
    axios.request({
        url: addr + "/api/BZzjjxm/queryList",
        method: "post",
        params: {

        },
        data: {
            "key": "12",
            "pageNo": 1,
            "pageSize": 10,
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0anMxaiIsImV4cCI6MTU3NDY4MTQwNSwiaWF0IjoxNTc0MDc2NjA1LCJqdGkiOiI0YzQyZDdlNmRkNTA0OWJhYmJkYjExZjJkNzlkMTQ5MyJ9.Q6k0v2oRIW3Sxei7ak8FBQVbNPiU_fEgUtUdlQBLNoETzf4dRANrwrJL5w7urEAfcF5LJmjx-bAvpR20qXtc6w"
        }
    }).then(function (response) {
        console.log("竞价管理竞价中项目的条件查询接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("竞价管理竞价中项目的条件查询接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //竞价管理：竞价人名单接口
    axios.request({
        url: addr + "/api/BZzjjxm/getJBidinfoList",
        method: "post",
        params: {

        },
        data: {
            "pageNo": 1,
            "pageSize": 1,
            "xmbh": "GL_GQ_2019_JFLBC3GS"
        }
    }).then(function (response) {
        console.log("竞价管理竞价人名单接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("竞价管理竞价人名单接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //竞价管理：报价记录接口查询接口
    axios.request({
        url: addr + "/api/BZzjjxm/getJBidinfoZcfList",
        method: "post",
        params: {

        },
        data: {
            "pageNo": 1,
            "pageSize": 1,
            "xmbh": "GL_GQ_2019_JFLBC3GS"
        }
    }).then(function (response) {
        console.log("竞价管理报价记录接口查询接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("竞价管理报价记录接口查询接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //竞价管理：待成交项目查询接口
    axios.request({
        url: addr + "/api/BDcjxm/list",
        method: "post",
        params: {

        },
        data: {
            "pageNo": 1,
            "pageSize": 1,
            "xmbh": "GL_GQ_2019_JFLBC3GS"
        }
    }).then(function (response) {
        console.log("竞价管理待成交项目查询接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("竞价管理待成交项目查询接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //竞价管理：生成成交公示接口
    axios.request({
        url: addr + "/api/BDcjxm/setToSccjgs",
        method: "post",
        params: {

        },
        data: {
            "xmbh": "BD_CQ_2019_S_0427",
            "sflq": 0,
            "cjsj": "2019-11-01T16:00:00.000Z",
            "zcqxQs": "1970-01-01T00:00:00.000Z",
            "zcqxJs": "1970-01-01T00:00:00.000Z"
        }
    }).then(function (response) {
        console.log("竞价管理生成成交公示接口：");
        console.log("Success：" + response.status);
        console.log("Time：" + (new Date().getTime() - time1) / 1000 + "s");
        console.log("----------------------")
    }).catch(err => {
        console.log("竞价管理生成成交公示接口：");
        console.log("fail:" + err);
        console.log("----------------------")
    });

    //   axios
    //     .request({
    //       url:
    //         "http://119.90.57.29:15502/api/CqjyCqzcgl/selectZcfxxAndZcxxExtByZcgltypeToPage",
    //       method: "post",
    //       params: {},
    //       data: {
    //         zcgltype: "1",
    //         pageNo: 1,
    //         pageSize: 10,
    //         publishstring: "1",
    //         totalCount: 290,
    //         token:
    //           "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0anMxaiIsImV4cCI6MTU3MjQxMjc3NywiaWF0IjoxNTcxODA3OTc3LCJqdGkiOiI3N2RiZDY3NjhlNWU0YWRlOTE4MTA3ODdmZmJlNzIzZSJ9.H0gdZpAJpQhM7T3lJOCgcsDqmvN29T96R_GgAudaLUYc9ZMJ4zRFM4ANo9YvziJEEWlzug5NFUuzGUu-Iqsm_w"
    //       }
    //     })
    //     .then(function(response) {
    //       for (var i = 0; i < response.data.msg.data.length; i++) {
    //         console.log(
    //           "answerEval:" + JSON.stringify(response.data.msg.data[i].zcfxxid)
    //         );
    //       }

    //       console.log("success");
    //       console.log("time1" + (new Date().getTime() - time1));
    //     })
    //     .catch(err => {
    //       console.log("fail:" + err);
    //     });
}, 10);
