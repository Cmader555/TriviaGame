//question variables with question, answer choices, and correct choices

var questions = [{
    question: "Who does Michael Scott accidentally hit with his car in the parking lot? ",
    choices: ["Meredith", "kevin", "Phyllis", "Oscar"],
    answer: "Meredith"

},
{
    question: "According to Prison Mike, what is the worst thing about prison?",
    choices: ["Figting", "Drugs", "Orcs", "Dementors"],
    answer: "Dementors"
},
{
    question: "Where did Toby move to when he left Dunder Mifflin, prior to returning?",
    choices: ["Belize", "Cuba", "Costa-Rica", "Argentina"],
    answer: "Costa-Rica"
},
{
    question: "What is Erin's real first Name?",
    choices: ["Angela", "Kelly", "Pam", "Meredith"],
    answer: "Kelly"
},
{
    question: "What food did kevin drop out of his pot, and spill all over the office?",
    choices: ["Soup", "Chili", "Spaghetti", "Mac and Cheese"],
    answer: "Chili"
},
{

    question: "By what name does Dwight mistakenly call Justin Bieber?",
    choices: ["Justice-Beaver", "Justice-Belieber", "Justine-Believer", "Justine-Beliebenheimer"],
    answer: "Justice-Beaver"
}];

//addtional variables needed
var correct = 0;
var incorrect = 0;
var unanswerred = 0;
var timeLeft = 15;
var counter;
questionIndex = 0;


function start() {


    $(".startbutton").on("click", function () {

        $(this).hide();


        beginGame(questionIndex);

    })

}

start();

function timer() {

    if (timeLeft === 0) {
        clearInterval(counter);
        //console.log("timer has stopped")

    } else {
        timeLeft--;
        //console.log("Seconds Remaining:" + timeLeft);
        $(".timer").html("<p>Seconds Remaining: <p>" + timeLeft);
    };

}

function beginGame(index) {

    $(".answer").empty();
    $(".choices").empty();

    if (index < questions.length) {
        
        timeLeft = 15;
        counter = setInterval(timer, 1000)
    
        $(".question").html("<p>" + questions[index].question + "</p>");
    
        for (i = 0; i < questions[index].choices.length; i++) {
            $(".choices").append(`<button type='button' class='btn btn-primary choicebtn' value=${questions[index].choices[i]}>  ${questions[index].choices[i]}  </button>`);
        }
    } else {

        //end of game screen
    }




};

$(document).on("click", ".choicebtn", function () {
    var answerGuessed = $(this).attr("value")
    //console.log("Answer is" + answerGuessed)

    if (answerGuessed === questions[questionIndex].answer) {
        $(".answer").html(`<p> You got the correct Answer! </p>`);
        correct++;

    } else {
        $(".answer").html(`<p> You guessed the wrong Answer! The correct answer was ${questions[questionIndex].answer} </p>`);
        incorrect++;


    }

    questionIndex++;

    setTimeout(function () { beginGame(questionIndex) }, 3000);
    clearInterval(counter);
});

