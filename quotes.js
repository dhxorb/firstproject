const quotes = [
    {
        quote: "THe bird fights its way out of the egg",
            author: "Hermann Hesse"
    },
    {
        quote: "할 수 있냐 없냐가 아니라, 되고 싶으니깐 하는 거야",
            author: "몽키D루피"
    },
    {
        quote: "내가 결정한거니까, 그걸 위해 죽는다면 상관 없어!!",
            author: "몽키D루피"
    },
    {
        quote: "지배 같은 건 안해. 이 바다에서 가장 자유로운 녀석이 바로 해적왕이다!",
            author: "몽키D루피"
    },
    {   
        quote: "사나이에겐!! 어떠한 일이 있어도 싸움을 피해서는 안되는 순간이 있다!!그것은.. 동료의 꿈이.. 비웃음을 당했을때야..",
            author: "우솝"
    },
    {
        quote: "명심해라, 루피. 승리도 패배도 알고, 달아나며 눈물을 흘리고서야 사내는 진정한 어른이 되지. 울어도 괜찮다···! 극복해라!!!",
            author: "샹크스"
    },
    {
        quote: "노력이란 발버둥쳐서 쌓아올려서 결국 재능이 되는거잖니",
            author: "마키시마 유스케-겁쟁이 페달"
    },
    {
        quote: "자전거는 아래를 보고 있어서는 앞으로 나갈 수 없어.",
            author: "후쿠토미 쥬이치-겁쟁이 페달(하코네학교 주장)"
    },
    {
        quote: "내는 나루코 쇼키치여... 오기? 그것은 부릴수록 좋은것이여!",
            author: "나루코 쇼키치-겁쟁이 페달"
    },
    {
        quote: "잘하는 게 하나만 있는데 그걸 막으면 어떻게 할래? 기다려? 도망가? 우회해? 그게 아니면 좌절해? 돌파하는 수 밖에 없잖아! 하고 싶은게 남아 있다면 이러니저러니 하지 말고 그냥 하는 거야!",
            author: "마키시마 유스케"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;