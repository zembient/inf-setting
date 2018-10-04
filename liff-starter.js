var dt = null;

window.onload = function (e) {
    liff.init(function (data) {
        dt = data;
    });
};

$(function () {

    var apiUrl = 'https://ho8169zonf.execute-api.ap-northeast-1.amazonaws.com/dev/setting';

    $('#register').click(
        function () {
            console.log("test");
            const lineId = dt.context.userId;
            const childrenName = document.getElementById("childrenName").value;
            const grandparentsName = document.getElementById('grandparentsName').value;

            console.log("lineId:" + lineId);
            console.log("childrenName:" + childrenName);
            console.log("grandparentsName:" + grandparentsName);

            $.ajax({
                url: apiUrl, // 通信先のURL
                type: 'POST',// 使用するHTTPメソッド (GET/ POST)
                
                data:JSON.stringify({
                    lineId: lineId,
                    childrenName: childrenName,
                    grandparentsName: grandparentsName,
                    })

                // 通信に成功した時に実行される
            }).done(function (response, textStatus, jqXHR) {
                console.log("成功:" + jqXHR.status);

                liff.sendMessages([{
                    type: 'text',
                    text: '初期設定が完了だもん！'
                }])
                liff.closeWindow();

                if (response.completed == 1) {
                    $('#message').html('登録を完了しました。');
                    console.log(response.data.email);
                }
                else if (response.completed == 0) {
                    $('#message').html('サーバーの内部エラーのため登録が失敗しました。');
                }

                // 通信に失敗した時に実行される
            }).fail(function (jqXHR, textStatus, errorThrown) {

                liff.sendMessages([{
                    type: 'text',
                    text: "エラーだもん (>_<)"
                }])
                alert("失敗:" + jqXHR.status);
                console.log("失敗:" + jqXHR.status);
            });
        });
});