const images = [
    "gorgeous background0.jpg",
    "gorgeous background1.jpg",
    "gorgeous background2.jpg",
    "gorgeous background3.jpg",
    "gorgeous background4.jpg",
    "gorgeous background5.jpg",
    "one piece shirohige.jpg",
    "one piece.png",
    "onepiece shanks.jpg",
    "yowamushi pedal.jpg",
    "yowamushi pedal2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);

//'랑 `백틱 실수 유의하기 bgImage.src = `img/${chosenImage}`; 에서 실수했다. 백틱 실수하지 않기.