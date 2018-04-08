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
