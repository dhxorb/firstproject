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
//만약에 깃허브 연결 안된다면 1-public or private에서 public을 안했거나 
//2-깃허브에서 새로운 프로젝트를 만들지 않았거나
//3-gitbash 세팅에서 유저네임 깃허브 유저네임과 다르게 설정했거나
//->아직해결중 해결안됨 3번하고 난후 시도 안해봤음.