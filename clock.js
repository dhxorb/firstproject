const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//니코쌤처럼 다중선택은 ctrl+d 하면 다중선택됨 스트링 부분 만들때 그렇게 했음.