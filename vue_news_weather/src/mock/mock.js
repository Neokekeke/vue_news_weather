var Mock = require('mockjs');
var person = {
      "name1" : "Neo",
      "name2" : "Cherry"
};

Mock.mock("http://neokekeke/getPerson",
      {
        "person" : person
      }
);

// 豆瓣api
Mock.mock("https://api.douban.com/v2/" , "GET" , function(data){
    return data;
});

Mock.mock("http://neokekeke/getWeather" , [
  {
      "province" : "广东省",
      "city" : [
          {
            "GZ" : {
              "area1" : "花都区 晴",
              "area2" : "白云区 多云"
            }
          },
          {
            "SZ" : {
              "area1" : "罗湖区 晴",
              "area2" : "福田区 蒙蒙雨"
            }
          },
          {
            "ZH" : {
              "area1" : "香洲区 晴",
              "area2" : "斗门区 微风"
            }
          }
      ]
  },
  {
    "province" : "广东省",
    "city" : [
        {
          "GZ" : {
            "area1" : "花都区 晴",
            "area2" : "白云区 多云"
          }
        },
        {
          "SZ" : {
            "area1" : "罗湖区 晴",
            "area2" : "福田区 蒙蒙雨"
          }
        },
        {
          "ZH" : {
            "area1" : "香洲区 晴",
            "area2" : "斗门区 微风"
          }
        }
    ]
}

]);
