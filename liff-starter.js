AWS.config.update({
  region: "ap-northeast-1",
  endpoint: "https://dynamodb.ap-northeast-1.amazonaws.com",
  accessKeyId: "7zn%A4c6mKtu,AKIAJSPOEJCAG5JCDNUQ",
  secretAccessKey: "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"
});

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
var date = new Date();

var now = date.toLocaleString();

window.onload = function(e) {
  liff.init(
    data => {
      document.getElementById("register").addEventListener("click", function() {
        const childrenName = document.getElementById("childrenName").value;
        const grandparentsName = document.getElementById("grandparentsName").value;

        console.log(childrenName);
        console.log(grandparentsName);
        console.log("register button clicked!");

        var params = {
          TableName: 'inf-setting',
          Item:{//プライマリキーを必ず含める（ソートキーがある場合はソートキーも）
               userId: "test",
               created: now,
               childrenName: childrenName,
               grandparentsName: grandparentsName,
          }
      };
      docClient.put(params, callback);

        liff
          .sendMessages([
            {
              type: "text",
              text: `<登録したもん！>\n 子供の名前：${childrenName}\ 祖父母の名前：${parentsName}`
            },
            {
              type: "text",
              text: ``
            }
          ])
          .then(function() {
            liff.closeWindow();
          })
          .catch(function(error) {
            window.alert("Error sending message: " + error);
          });
        liff.closeWindow();
      });
    },
    err => {
      console.log(err);
    }
  );
};
