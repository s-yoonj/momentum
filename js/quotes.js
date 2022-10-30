const quotes = [
  {
    quote: "나중은 결코 오지 않는다.",
    author: "Leblanc's Law",
  },
  {
    quote: "먼저 개척해라. 그리고 고독해져라.",
    author: "버지니아 로메티",
  },
  {
    quote:
      "성공은 형편없는 선생님이다.그것은 똑똑한 사람들로 하여금 절대 패할 수 없다고 착각하게만든다",
    author: "빌 게이츠",
  },
  {
    quote:
      "실패는 옵션이다. 실패하지 않는다면, 당신은 충분한 혁신을 이룰 수 없다.",
    author: "앨런 머스크",
  },
  {
    quote: "실패에 대해 걱정하지 마라. 한번만 제대로 하면 된다.",
    author: "드류 휴스턴",
  },
  {
    quote: "리더십이란, 리더가 없는 상황에서도 그 영향력이 지속되도록 하는 것",
    author: "셰릴 샌드버그",
  },
  {
    quote:
      "혁신을 할 때는 모든 사람들이 당신을 미쳤다고 할 테니, 그들 말에 준비가 되어 있어야 한다.",
    author: "래리 앨리슨",
  },
  {
    quote:
      "성공적인 직원 채용의 방법은 세상을 변화시키길 원하는 사람들을 찾아내는 것이다.",
    author: "마크 베니오프",
  },
  {
    quote:
      "나는 항상 준비되어 있지 않은 일들을 했다. 바로 그것이 성장하는 방법이라고 생각했다. 스스로 해낼 수 있다는 확신이 들지않는 순간에도 그 것을 끝까지 도전하면 당신은 돌파구를 찾을 수 있을 것이다.",
    author: "마리사 메이어",
  },
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
