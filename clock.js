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
// git pull origin master를 입력했더니 
// 다음과 같은 에러가 발생했다.
// 에러 : fatal: couldn't find remote ref master
//만약에 깃허브 연결 안된다면 1-public or private에서 public을 안했거나 
//2-깃허브에서 새로운 프로젝트를 만들지 않았거나
//3-gitbash 세팅에서 유저네임 깃허브 유저네임과 다르게 설정했거나
//->셋다 아니었음.(1,2번은 해결에 도움을 준듯함. 특히2번은 내가 까먹고 생략한 과정이기도 함.)
//원인 : Github의 기본 생성 브랜치 이름이 입력한 것과 달라서 나타난 것.
// 다시말해서 $ git pull origin master
// 에서 master가 아닌 다른 이름을 썼다는 의미다.
// 본인의 Repository로 가서 확인 후 name을 제대로 쓰면 된다.
//주로 master가 아니면main이 쓰인듯하다 브랜치 이름 확인하는 법을 아직 모르지만 main을 master대신 사용해서 문제를 해결했다.
