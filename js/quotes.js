const quotes = [
    {
        quote:'인생에 뜻을 세우는데 적당한 때는 없다.',
        author:'볼드윈'
    },
    {
        quote:'실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안된다.',
        author:'하버트 개서'
    },
    {
        quote:'일단 시작해라. 나중에 완벽해지면 된다.',
        author:'기시미 이치로'
    },
    {
        quote:'인격은 그 사람의 운명이다.',
        author:'론 무어'
    },
    {
        quote:'모든 사람들로부터 사랑받지 않아도 된다.',
        author:'니체'
    },
    {
        quote:'꿈을 꾸기에 인생이 빛난다.',
        author:'모차르트'
    },
    {
        quote:'이 세상에서 자기 자신보다 사랑스러운 것은 없다.',
        author:'상용부경전'
    },
    {
        quote:'오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.',
        author:'앙드레 말로'
    },
    {
        quote:'To love someone, you have to love yourself first. - Beauty and the Beast',
        author:'미녀와 야수'
    },
    {
        quote:'We must be our own before we can be another’s. – Ralph Waldo Emerson',
        author:'랄프 왈도 에머슨'
    },
]
//Math.random() 0에서 1사이의 랜덤 숫자
//floor(), round() 내림.
//ceil() 반올림

function Quotes(){
    const quote = document.querySelector('#quote span:first-child');
    const author = document.querySelector('#quote span:last-child');
    const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]
    quote.innerHTML = todayQuote.quote;
    author.innerHTML = todayQuote.author;
}

Quotes()
setInterval(Quotes, 5000)