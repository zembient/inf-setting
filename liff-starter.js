window.onload = function(e) {
  liff.init(
    data => {
      document.getElementById("register").addEventListener("click", function() {
        const childrenName = document.getElementById("childrenName").value;
        const grandparentsName = document.getElementById("grandparentsName").value;

        console.log(childrenName);
        console.log(parentsName);

        console.log("register button clicked!");

        

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
