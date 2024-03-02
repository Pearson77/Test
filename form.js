let button = document.getElementById("button");
let tg = window.Telegram.WebApp;

button.addEventListener("click", () => {
    let value = document.getElementById("inp").value;
    if (value) {
        tg.sendData('test_data');
        tg.close();
    }
})
