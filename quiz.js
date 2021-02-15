// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Tentukanlah nilai x yang memenuhi dari persamaan berikut, x + 3 = 7 ",
        choiceA : "2",
        choiceB : "3",
        choiceC : "4",
        choiceD : "5",
        correct : "C"
    },{
        question : "Tentukanlah nilai x yang memenuhi dari persamaan berikut, x – 4 = 12 ",
        choiceA : "15",
        choiceB : "16",
        choiceC : "17",
        choiceD : "18",
        correct : "B"
    },{
        question : "Tentukanlah nilai x yang memenuhi dari persamaan berikut, 2x = 18",
        choiceA : "9",
        choiceB : "10",
        choiceC : "11",
        choiceD : "12",
        correct : "A"
    },{
        question : "Tentukan penyelesaian dari setiap persamaan berikut menggunakan bentuk setara, x + 5 = 6 ",
        choiceA : "1",
        choiceB : "2",
        choiceC : "3",
        choiceD : "4",
        correct : "A"
    },{
        question : "Tentukan penyelesaian dari setiap persamaan berikut menggunakan bentuk setara, w – 11 = 3 ",
        choiceA : "11",
        choiceB : "12",
        choiceC : "13",
        choiceD : "14",
        correct : "D"
    },{
        question : "Tentukan penyelesaian dari setiap persamaan berikut menggunakan bentuk setara, 5 + a = –5",
        choiceA : "-10",
        choiceB : "-11",
        choiceC : "-12",
        choiceD : "-13",
        correct : "A"
    },{
        question : "Tentukan penyelesaian dari setiap persamaan berikut menggunakan bentuk setara, –8 = –2 + a",
        choiceA : "-4",
        choiceB : "-5",
        choiceC : "-6",
        choiceD : "-7",
        correct : "C"
    },{
        question : "Tentukan penyelesaian dari setiap persamaan berikut menggunakan bentuk setara, 9 = –1 + t",
        choiceA : "7",
        choiceB : "8",
        choiceC : "9",
        choiceD : "10",
        correct : "D"
    },{
        question : "Tentukan penyelesaian dari setiap persamaan berikut menggunakan bentuk setara, 16 + m = 16 ",
        choiceA : "0",
        choiceB : "1",
        choiceC : "2",
        choiceD : "3",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;


// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    //TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        //clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"</p>";
}