
$( function() {

  var apiUrl = 'https://ho8169zonf.execute-api.ap-northeast-1.amazonaws.com/dev/setting';

  $('#register').click(
      function(){
          console.log("test");
          var formData = $("#form").serialize();
          const lineId = document.getElementById('useridfield').textContent;
          const childrenName = document.getElementById("childrenName").textContent;
          const grandparentsName = document.getElementById('grandparentsName').textContent;


          console.log("lineId:" + lineId);
          console.log("childrenName:" + childrenName);
          console.log("grandparentsName:" + grandparentsName);
          console.log("formData:" + formData);

          $.ajax({
              url:apiUrl, // 通信先のURL
              type:'POST',// 使用するHTTPメソッド (GET/ POST)
              data:formData, // 送信するデータ
              dataType:'json', // 応答のデータの種類 (xml/html/script/json/jsonp/text)
              contentType: "application/json",
              
              // 通信に成功した時に実行される
              }).done(function(response,textStatus,jqXHR) {
                  console.log("成功:" + jqXHR.status);

                  if (response.completed == 1)
                  {
                      $('#message').html('登録を完了しました。');
                      console.log(response.data.email);
                  }
                  else if(response.completed == 0)
                  {
                      $('#message').html('サーバーの内部エラーのため登録が失敗しました。');
                  }

               // 通信に失敗した時に実行される
              }).fail(function(jqXHR, textStatus, errorThrown) {
                  alert("失敗:" + jqXHR.status);
                  console.log("失敗:" + jqXHR.status);
              });
      });
});