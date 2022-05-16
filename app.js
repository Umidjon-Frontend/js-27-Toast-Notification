const btnNotification = document.querySelector(".btn__notification");
const toasts = document.querySelector(".toasts");

const notifications = ["Information notification message", "Success notification message", "Error notification message", "Warning notification message", "Custom notification message"];
const colorNotif = ["info", "success", "error", "warm", "custom"];

btnNotification.addEventListener("click", () => onClickNotification());

function onClickNotification() {
    const notef = document.createElement("div");

    notef.classList.add("toast");

    let randomNum = Math.floor(Math.random() * notifications.length);

    notef.innerHTML = notifications[randomNum];

    notef.classList.add(colorNotif[randomNum]);

    toasts.appendChild(notef);

    setTimeout(() => {
        notef.remove();
    }, 3000);
}
