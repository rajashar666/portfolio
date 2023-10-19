// ========scrol section activite  link========// 

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };

    });

    //=======sticky navbar=====//

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
//// scrool reval////

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });












/////======typed js-=======///


const typed = new Typed('.multiple-text', {
    strings: ['Fronted Developer', 'Web Developer', 'Graphic Disenger',],
    typedSpeed: 100,
    backSpeed: 100,
   backDelay: 1000,
   loop: true

});

let  words = document.querySelectorAll("word");
words.forEach ((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letteras)=>{
        let span    = document.createElement("span");
        span.textContent = letteras;
        span.className = "letters";
        word.append(span);



    });
});

let CurrentWordIndex = 0;
let maxtWordIndex = words.length -1;
word[CurrentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let CurrentWord = words[CurrentWordIndex];
    let maxtWordIndex = CurrentWordIndex ===maxWordIndex ?words[0] : words[CurrentWordIndex + 1];
    Array.from(CurrentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);

    });

 
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";

        },340 + i * 80);
    });
    CurrentWordIndex = CurrentWordIndex ===maxWordIndex ? 0: CurrentWordIndex + 1;

};
changeText();
setInterval(changeText ,30000)



// ....

const textToType = "Hello, World! This is a typing effect.";
const typedTextElement = document.getElementById("typed-text");

let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typedTextElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Adjust the typing speed here (milliseconds)
    }
}

typeText();
