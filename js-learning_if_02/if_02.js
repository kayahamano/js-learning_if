const judgeBtn = document.getElementById("judgeBtn");

judgeBtn.addEventListener("click", () => {
    const score = Number(document.getElementById("score").value);
    const resultMessage = document.getElementById("resultMessage");

    resultMessage.textContent = ""; 

    if (score >= 90 && score <= 100) {
        resultMessage.textContent = "あなたの成績は秀です";
     } else if (score >= 80) {
        resultMessage.textContent = "あなたの成績は優です";
     } else if (score >= 70) {
        resultMessage.textContent = "あなたの成績は良です";
     } else if (score >= 60) {
        resultMessage.textContent = "あなたの成績は可です";
     } else if (score < 60 && score >= 0) {
        resultMessage.textContent = "あなたの成績は不可です";
     } else {
        resultMessage.textContent = "0~100の数値を入力してください";
    }
});