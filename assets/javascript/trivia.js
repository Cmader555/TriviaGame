//question variables with question, answer choices, and correct choices

var questions = [{
    question: "Who does Michael Scott accidentally hit with his car in the parking lot? ",
    choices: ["Merideth", "kevin", "Phyllis", "Oscar"],
    answer: 0

},
{
    question: "According to Prison Mike, what is the worst thing about prison?",
    choices: ["Figting", "Drugs", "Orcs", "Dementors"],
    answer: 3
},
{
    question: "Where did Toby move to when he left Dunder Mifflin, prior to returning?",
    choices: ["Belize", "Cuba", "Costa Rica", "Argentina"],
    answer: 2
},
{
    question: "What is Erin's real first Name?",
    choices: ["Angela", "Kelly", "Pam", "Meredith"],
    answer: 1
},
{
    question: "What food did kevin drop out of his pot, and spill all over the office?",
    choices: ["Soup", "chilli", "Spaghetti", "Mac and Cheese"],
    answer: 1
},
{

    question: "By what name does Dwight mistakenly call Justin Bieber?",
    choices: ["Justise Beaver", "Justise Belieber", "Justine Believer", "Justine Beliebenheimer"],
    answer: 0
}];

//addtional variables needed
var correct = 0;
var incorrect = 0;
var unanswerred = 0;
var timeLeft = 20;
var counter; 


function start() {


    $(".btn").on("click", function () {

        $(this).hide();
        counter = setInterval(timer, 1000)
        

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

function beginGame () {

    array.forEach(element => {
        
    });


}