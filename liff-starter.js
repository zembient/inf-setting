const timing = {
  1: "食前",
  2: "食後",
  3: "食間"
};

const meal = {
  1: "朝食",
  2: "昼食",
  3: "夕食"
};

window.onload = function(e) {
  liff.init(
    data => {
      document.getElementById("register").addEventListener("click", function() {
        const medicine = document.getElementById("medicine").value;

        let timingList = [];
        let mealList = [];

        const syokuzen = document.getElementById("syokuzen");
        if (syokuzen.checked) {
          timingList.push(syokuzen.value);
        }
        const syokugo = document.getElementById("syokugo");
        if (syokugo.checked) {
          timingList.push(syokugo.value);
        }
        const syokkan = document.getElementById("syokkan");
        if (syokkan.checked) {
          timingList.push(syokkan.value);
        }

        const asa = document.getElementById("asa");
        if (asa.checked) {
          mealList.push(asa.value);
        }
        const hiru = document.getElementById("hiru");
        if (hiru.checked) {
          mealList.push(hiru.value);
        }
        const yoru = document.getElementById("yoru");
        if (yoru.checked) {
          mealList.push(yoru.value);
        }

        console.log(medicine);
        console.log(timingList);
        console.log(mealList);

        for (num of timingList) {
        }
        console.log();

        console.log("register button clicked!");
        liff
          .sendMessages([
            {
              type: "text",
              text: `<お薬リマインダーを登録する>\n【お薬名　　】：${medicine}\n【タイミング】：${timing}`
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
