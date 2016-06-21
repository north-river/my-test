(function () {
    "use strict";
    kintone.events.on('app.record.index.show', function (event) {
        if (document.getElementById ('my_index_button') != null) {
            return;
        }
         
        var myIndexButton = document.createElement('button');
        myIndexButton.id = 'my_index_button';
        myIndexButton.innerHTML = '一覧のボタン';
          
        // ボタンクリック時の処理
        myIndexButton.onclick = function() {
            //ここに処理を書いてください
            kintone.api(
                kintone.api.url("/k/v1/record", true),
                    "GET",
                    {"app":"380", "id": "5"},
                    function(resp){
                        var record = resp.record;
                        alert(record["会社名"]["value"]);
                    },function(e){
                        console.log("error:" + e.message);
                    }
                );
        }
          
        kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
    });
})();