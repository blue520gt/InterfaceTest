// const addr = "http://119.90.57.29:15502";
const addr = "http://newadmin.tjnjs.com";
const idNo = "27222"

let document = {
    captcha: {
        param: {
            url: addr + "/api/captcha.jpg",
            method: "get",
        },
        name: "后台登录图形验证码: "
    },
    login: {
        param: {
            url: addr + "/api/security/login",
            method: "get",
            params: {
                name: "admin",
                passwd: "admin2"
            },
            headers: {
                Cookie: 'JSESSIONID=c6330f1d-c484-4c05-8855-a0062e500dab',
                //Connection: "keep-alive",
                // Host: "newadmin.tjnjs.com",
                // "User-Agent": "Mozilla/ 5.0(Windows NT 10.0; Win64; x64) AppleWebKit/ 537.36(KHTML, like Gecko) Chrome/ 78.0.3904.97 Safari / 537.36",
                //Referer: "http://newadmin.tjnjs.com/"
            }
        },
        name: "后台登录: "
    },
    newsList: {
        param: {
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
            }
        },
        name: "资讯管理查询的接口:"
    },
    newsAdd: {
        param: {
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
        },
        name: "资讯管理新增的接口："
    },
    newsUpdate: {
        param: {
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
        },
        name: "资讯管理修改的接口："
    },
    newsUpdateTop: {
        param: {
            url: addr + "/api/news/updateTop/427",
            method: "get",
        },
        name: "资讯管理置顶的接口："
    },
    newsUnUpdateTop: {
        param: {
            url: addr + "/api/news/unUpdateTop/411",
            method: "get",
        },
        name: "资讯管理取消置顶的接口："
    },
    xx: {
        param: {

        },
        name: ""
    }
}
exports.document = document