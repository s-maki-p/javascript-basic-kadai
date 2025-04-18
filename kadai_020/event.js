//btn要素を取得
const btn = document.getElementById("btn");

//クリックをすると実行
btn.addEventListener("click", () => {
    const text = document.getElementById("text");
    text.textContent = "ボタンをクリックしました";
});