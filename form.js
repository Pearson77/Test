let button = document.getElementById("button");
let tg = window.Telegram.WevApp;

tg.expand();

button.addEventListener("click", () => {
    let value = document.getElementById("inp").value;
    if (value) {
        tg.sendData(value);
        tg.close();
    }
})
