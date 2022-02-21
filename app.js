//Random Quote Generator

// getting Element Id's from Html
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');


// declaring colors
let colors = ['#0000ff', '#8a2be2', '#a52a2a', '#deb887', '#7fff00', '#00ffff', '#00bfff', '#4b0082', '#ff0000', '#ffff00', '#ee82ee', 'orange', '#006400', '#556b2f', '#ff8c00', '#4682b4'];

// setting Quotes and their Author's
let quotes = [
    {
        author: "-Marty Rubin",
        quote: '“Morning will come, it has no choice.”'
    },
    {
        author: "-Justina .C Headley",
        quote: '“You raze the old to raise the new.”'
    },
    {
        author: "-Walt Disney",
        quote: '“The way to get started is to quit talking and begin doing”'
    },
    {
        author: "-Eleanor Roosevelt",
        quote: '“If life were predictable it would cease to be life, and be without flavor”'
    },
    {
        author: "-Mother Teresa",
        quote: '“Spread love everywhere you go. Let no one ever come to you without leaving happier.”'
    },
    {
        author: "-Margaret Mead",
        quote: '“Always remember that you are absolutely unique. Just like everyone else.”'
    },
    {
        author: "-Robert Louis S.",
        quote: '“Don\'t judge each day by the harvest you reap but by the seeds that you plant.”'
    },
    {
        author: "-Margaret Mitchell",
        quote: '“Tomorrow is another day.”'
    },
    {
        author: "-Aristotle",
        quote: '“It is during our darkest moments that we must focus to see the light.”'
    },
    {
        author: "-Ralph Waldo E.",
        quote: '“Do not go where the path may lead, go instead where there is no path and leave a trail.”'
    },
    {
        author: "-Abraham Lincoln",
        quote: '“In the end, it\'s not the years in your life that count. It\'s the life in your years.”'
    },
    {
        author: "-Helen Keller",
        quote: '“Life is either a daring adventure or nothing at all.”'
    },
    {
        author: "-Richie Norton",
        quote: '“Every sunset is an opportunity to reset.”'
    },
    {
        author: "-Dalai Lama",
        quote: '“The purpose of our lives is to be happy.”'
    },
    {
        author: "-Confucius",
        quote: '“Life is really simple, but we insist on making it complicated.”'
    },
    {
        author: "-Winston Churchill",
        quote: '“Success is walking from failure to failure with no loss of enthusiasm.”'
    },
    {
        author: "-Amelia Earhart",
        quote: '“The most difficult thing is the decision to act, the rest is merely tenacity.”'
    },
    {
        author: "-Napoleon Hill",
        quote: '“Whatever the mind of man can conceive and believe, it can achieve.”'
    },
    {
        author: "-Catherine Pulsifer",
        quote: '“The old has passed away...the new has come.”'
    },
    {
        author: "-Bible",
        quote: '“Just take it as a beautiful chance for you to rebuild yourself.”'
    },
    {
        author: "-Marty Rubin",
        quote: '“How different every hour is from the one before!”'
    },
    {
        author: "-Ron Baratono",
        quote: '“Our journey without judgment can begin today”'
    },
    {
        author: "-Lisa Marie H.",
        quote: '“Your history is not your destiny.”'
    },
    {
        author: "-Charlotte Eriksson",
        quote: '“You can start anew at any given moment. Life is just the passage of time.”'
    },
    {
        author: "-T.S. Eliot",
        quote: '“Every moment is a fresh beginning.”'
    },
    {
        author: "-Shannon L. Alder",
        quote: '“All great beginnings start in the dark.”'
    },
    {
        author: "-Maya Angelou",
        quote: '“No matter what happens, life does go on.”'
    },
    {
        author: "-A.D. Aliwat",
        quote: '“We are born every day and we die every day.”'
    },
    {
        author: "-George Eliot",
        quote: '“One can begin so many things with a new person!”'
    },
    {
        author: "-Tristan Roulo",
        quote: '“A new dawn always breaks after darkness.”'
    },
    {
        author: "-Anthony Liccione",
        quote: '“Don\'t pass on your passions. Endure. Strive. Ensure.”'
    },
];


//Random Quote function
let next = () => {
    const quotesLen = quotes.length - 1;
    const currentLen = Math.round(Math.random() * quotesLen);

    quote.innerHTML = quotes[currentLen].quote;
    author.innerHTML = quotes[currentLen].author;

    const numColor = colors.length - 1;
    const background = Math.round(Math.random() * numColor);

    document.querySelector('#body').style.background = colors[background];
    quote.style.color = colors[background];
    author.style.color = colors[background];
    btn.style.background = colors[background];

}



//  Contact Me @ 
//  Ezehemmanuel62@gmail.com 
//  https://www.twitter.com/Ezehemmanuel62 
