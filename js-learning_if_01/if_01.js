const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");

  errorMessage.textContent  = "";
  successMessage.textContent = "";

  if (name === "") {
        errorMessage.textContent = "名前を入力してください。";
     } else if (message === "") {
        errorMessage.textContent = "お問い合わせ内容を入力してください。";
     } else {
        successMessage.textContent = "投稿しました。";
    }
});