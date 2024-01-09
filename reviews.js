//Local Reviews Data
const reviews = [
    { 
        id: 1,
        name: "Susan Smith",
        job: "Web Developer", 
        img: "images/susan-smith.jpg",
        text: "I'm Susan Smith and I'm a web developer, I love reading and writing different reviews!",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "images/anna-johnson.jpg",
        text: "I'm Anna Johnson, I'm a web designer who loves coffee and wine",
    },
    {
        id: 3,
        name: "Pamela Chu",
        job: "Software Engineer",
        img: "images/pamela-chu.jpg",
        text: "I'm Pamela Chu, I'm a web designer who loves coffee and wine",
    },
    {
        id: 4,
        name: "Stephanie Vargas",
        job: "Solutions Architect",
        img: "images/steph-vargas.jpg",
        text: "I'm Steph Vargas, I'm a web designer who loves coffee and wine",
    }
];
//Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//Set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

//Show Person based on item
function showPerson(currentItem){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//Show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});
//Show previous person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})
//Show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
})