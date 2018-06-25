var counter = 0;
var timer;
var rightA = 0;
var wrongA = 0;
var unanswered = 0;
var totalRight = 0;
var totalWrong = 0;
var totalUnanswered = 0;
var clockTimer = 15;    
var gameHtml;
var openingScreen;
var qCount = 0;
var guessed = false;
var finalRound = false;
var loveHateNum;
var btnCounter = 1;

// win/loose responses
var love = ["Good Job!", "Nice work!", "Great!", "Awesome!", "Nailed it!", "Keep it up!"];
var hate = ["You suck!", "You can do better than that!", "*facepalm*", "Really dude?", "Blindly guessing I see?", "Are you just button mashing?"]

// object of array of quotes/answers/options
var quotes = [
    {
        q: [ 
            "Do I look like a cat to you boy? Am I jumpin' around all nimbly bimbly from tree to tree? Am I drinking milk from a saucer? DO YOU SEE ME EATING MICE?", "Litre is French for give me some fucking cola before I break vous fucking lips!", "Littering and smoking the reefer. Now to teach you boys a lesson, me and officer Rabbit are going to stand here while you three smoke the whole bag."
        ],
        hint: " A 2001 'Broken Lizard' cult classic film.",
        correctAnswer: "Super Troopers",
        optionOne: ["Deadpool", "Idiocracy", "Talladega Nights"],
        optionTwo: ["Hot Fuzz", "Rush Hour", "21 Jump Street"],
        optionThree: ["Bad Boys", "The Other Guys", "Grandma's Boy"],
        images: [ "sT0", "sT1", "sT2" ]
    },
    {
        q: [ 
            "My roommates said they were gonna get me rims for Christmas, or a CB radio so I could talk to other car beds.", "All I've ever cared about was video games and they made me a millionaire. So maybe I don't know what the Civil War was, or who invented the helicopter even though I own one, but I did beat The Legend of Zelda before I could walk. I'm thinking about getting metal legs. It's a risky operation, but it'll be worth it.", "Oh, yes! Finally a roommate who goes shopping. Chicken cutlet, spaghetti with garlic bread, oh, my God, the wings to go with the breast, I don't know what you are but I'm gonna fucking eat you too."
        ],
        hint: " A 2006 comedy about a 35 year-old video game tester.",
        correctAnswer: "Grandma's Boy", 
        optionOne: ["Super Troopers", "Anchorman", "The Big Lebowski"],
        optionTwo: ["Super Bad", "Idiocracy", " Talladega Nights"],
        optionThree: ["Pineapple Express", "Half Baked", "Step Brothers"],
        images: [ "gB0", "gB1", "gB2" ]
    },
    {
        q: [ 
            "Shit. I know shit's bad right now, with all that starving bullshit, and the dust storms, and we are running out of french fries and burrito coverings. But I got a solution.", "Don't worry, scrote. There are plenty of 'tards out there living really kick-ass lives. My first wife was 'tarded. She's a pilot now.", "This should help you calm down. Please come back when you can afford to make a purchase. Your kids are starving. Carl's Jr. believes no child should go hungry. You are an unfit mother. Your children will be placed in the custody of Carl's Jr. Carl's Jr... 'Fuck You, I'm Eating.'"
        ],
        hint: " In 2505, the smartest man in the world is named 'Not Sure.'",
        correctAnswer: "Idiocracy",
        optionOne: ["Pineapple Express", "Super Troopers", "Dude, Where's My Car?"],
        optionTwo: ["Bill and Teds Excellent Adventure", "Half Baked", "Step Brothers"],
        optionThree: ["Deadpool", "Bio-Dome", "Grandma's Boy"],
        images: [ "i0", "i1", "i2" ]
    },
    {
        q: [ 
            "God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys God. Man creates dinosaurs.", "I am totally unappreciated in my time. You can run this whole park from this room with minimal staff for up to 3 days. You think that kind of automation is easy? Or cheap? You know anybody who can network 8 connection machines and debug 2 million lines of code for what I bid for this job? Because if he can I'd like to see him try.", "T-Rex... , you said you've got a T-Rex?"
        ],
        hint: " A 1993 classic film with amazing animatronics.",
        correctAnswer: "Jurassic Park",
        optionOne: ["Deadpool", "Killer T-Rex", "Grandma's Boy"],
        optionTwo: ["Rounders", "Hackers", "The Matrix"],
        optionThree: ["Dogma", "Dinosaur Jr.", "Godzilla"],
        images: [ "jP0", "jP1", "jP2" ]
    },
    {
        q: [ 
            "Here's the deal, I'm the best there is. Plain and simple. I wake up in the morning and I piss excellence.", "Help me Jesus! Help me Jewish God! Help me Allah! AAAAAHHH! Help me Tom Cruise! Tom Cruise, use your witchcraft on me to get the fire off me!", "So when you say psychosomatic, you mean like he could start a fire with his thoughts?"
        ],
        hint: " Will Ferrell wants to 'go fast!'",
        correctAnswer: "Talladega Nights",
        optionOne: ["Step Brothers", "Old School", "Zoolander"],
        optionTwo: ["Idiocracy", "Semi-Pro", "Super Troopers"],
        optionThree: ["Anchorman", "Rounders", "Dude, Where's My Car?" ],
        images: [ "tD0", "tD1", "tD2" ]
    },
    {
        q: [ 
            "Now, I'm about to do to you what Limp Bizkit did to music in the late 90s.", "Listen Al, if I never see you again, I want you to know that I love you very much. I also buried 1,600 kilos of cocaine somewhere in the apartment - right next to the cure for blindness. Good luck.", "Okay guys, I only have twelve bullets, so you're all going to have to share!"
        ],
        hint: " The Superhero with the most twisted sense of humor.",
        correctAnswer: "Deadpool",
        optionOne: ["Idiocracy", "Mystery Men", "The Mask"],
        optionTwo: ["Sin City", "Grandma's Boy", "Talladega Nights"],
        optionThree: ["Kick-Ass", "Half Baked", "Step Brothers"],
        images: [ "dP0", "dP1", "dP2" ]
    },
    {
        q: [
            "I want him to think that I am pondering a call, but all I'm really thinkin about it Vegas and the fuckin' Mirage.", "No More! No! Not tonight! This son of bitch, all night he, 'Check. Check. Check.' He trap me!", "Rolled up aces over kings. Check-raising stupid tourists and taking huge pots off of them. Playing all-night high-limit Hold'em at the Taj, 'where the sand turns to gold.' Stacks and towers of checks I can't even see over."
        ],
        hint: " The greatest poker movie of all time.",
        correctAnswer: "Rounders",
        optionOne: ["Casino Royale", "Ocean's Eleven", "Casino"],
        optionTwo: ["Molly's Game", "Talladega Nights", "The Gambler"],
        optionThree: ["Super Bad", "Vegas Vacation", "Grandma's Boy"],
        images: [ "r0", "r1", "r2" ]
    }

];
var imgClass = quotes[counter].images[qCount];

startScreen();

// generates start screen
function startScreen (){
    btnCounter = 1;
    totalUnanswered = 0;
    totalRight = 0;
    totalWrong = 0;
    openingScreen = "Welcome to Movie Quotes Trivia!<br><br> You'll have 15 seconds to guess each movie quote. Click the button to begin.<br> Good Luck!<br><br><button type='button' class='btn btn-success'>Click here to start Round 1</button>";
    $("#tvDisplay").removeClass("tvDisplay").addClass("blankTv");
    $("#tvText").removeClass("quote").addClass("instructions");
    $(".instructions").html(openingScreen);
}

// generates quote
function getQuote(){   
    guessed = false;
    var randChoice = Math.floor(Math.random() * 4);
    var randImg = Math.floor(Math.random() * 3);
    imgClass = quotes[counter].images[qCount];
    
// my attempt at somewhat randomizing options with certain specifications
var choiceOrder1 = "<button type='button' class='btn btn-Light'> A. " + quotes[counter].correctAnswer + "</button>" + "<button type='button' class='btn btn-Light'> B. " + quotes[counter].optionOne[randImg] + "</button>" + "<button type='button' class='btn btn-Light'> C. " + quotes[counter].optionTwo[randImg] + "</button>" + "<button type='button' class='btn btn-Light'> D. " + quotes[counter].optionThree[randImg] + "</button>";
var choiceOrder2 = "<button type='button' class='btn btn-Light'> A. " + quotes[counter].optionOne[randImg] + "</button>" + "<button type='button' class='btn btn-Light'> B. " + quotes[counter].correctAnswer + "</button>" + "<button type='button' class='btn btn-Light'> C. " + quotes[counter].optionTwo[randImg] + "</button>" + "<button type='button' class='btn btn-Light'> D. " + quotes[counter].optionThree[randImg] + "</button>";
var choiceOrder3 = "<button type='button' class='btn btn-Light'> A. " + quotes[counter].optionTwo[randImg] + "</button>" + "<button type='button' class='btn btn-Light'> B. " + quotes[counter].optionOne[randImg] + "</button>" + "<button type='button' class='btn btn-Light'> C. " + quotes[counter].correctAnswer + "</button>" + "<button type='button' class='btn btn-Light'> D. " + quotes[counter].optionThree[randImg] + "</button>";
var choiceOrder4 = "<button type='button' class='btn btn-Light'> A. " + quotes[counter].optionTwo[randImg] + "</button>" + "<button type='button' class='btn btn-Light'> B. " + quotes[counter].optionOne[randImg] + "</button>" + "<button type='button' class='btn btn-Light'> C. " + quotes[counter].correctAnswer + "</button>" + "<button type='button' class='btn btn-Light'> D. " + quotes[counter].optionThree[randImg] + "</button>";
var choicesArray = [choiceOrder1, choiceOrder2, choiceOrder3, choiceOrder4];
    clock();
    gameHtml = quotes[counter].q[qCount];
    resetTv();
    $("#tvText").addClass("quote");
    $(".quote").html(gameHtml);
    $("#choicesDisplay").html(choicesArray[randChoice]);
}

var selected;
// click event for starting game
$("#tvDisplay").on("click", ".btn-success", function() {
    getQuote();
})

// click event for starting next round
$("#tvDisplay").on("click", ".btn-primary", function() {
    if(qCount === 3 ){
        qCount = 0;
    }
    quotes.sort(function() {
        return .5 - Math.random();
      });
    resetTv();
    resetGame();
    getQuote();
})

// click event guessing the quote
$("#choicesDisplay").on("click", ".btn-Light", function() {
    selected = $(this).text();
    if(selected.includes(quotes[counter].correctAnswer) && (guessed == false)) {
        guessed = true;
        $("#tvDisplay").removeClass("blankTv").addClass(imgClass);
        win();
        clearInterval(timer);

    } else if (guessed == false) {
        guessed = true;
        lose();
        clearInterval(timer);
    }
});

// Good game/end restart
function gg() {
    resetTv();
    gameHtml = "<br><br><br><br>Good Game!" ;
    $("#tvText").addClass("instructions");
    $(".instructions").html(gameHtml);
}

// adds up/displays total cumulative score
function totalScore() {
    gameHtml = " Your Total Score:<br><br> Correct: " + totalRight + "<br><br> Incorrect: " + totalWrong + "<br><br> Unanswered: " + totalUnanswered ;
    $("#tvDisplay").removeClass("blankTv").addClass("endTv");
    $("#tvText").addClass("endScore");
    $(".endScore").html(gameHtml);
}

// ends the game after final round
function endGame() {
    totalRight += rightA;
    totalWrong += wrongA;
    totalUnanswered += unanswered;
    finalRound = false;
    $("#choicesDisplay").empty();
    resetTv();
    gameHtml = "Final Round Score:<br><br> Correct: " + rightA + "<br><br> Incorrect: " + wrongA + "<br><br> Unanswered: " + unanswered ;
    $("#tvDisplay").removeClass("blankTv").addClass("endTv");
    $("#tvText").addClass("endScore");
    $(".endScore").html(gameHtml);
    setTimeout(totalScore, 3000);
    setTimeout(gg, 7000);
    setTimeout(resetGame, 8000);
    setTimeout(resetTv, 8000);
    setTimeout(startScreen, 8000);
}

// ends round/determins if its final round
function endScreen(){
    totalRight += rightA;
    totalWrong += wrongA;
    totalUnanswered += unanswered;
    $("#choicesDisplay").empty();
    btnCounter++;
    qCount++;
    resetTv();
    if (btnCounter === 3){
        finalRound = true;
        btnCounter = 1;
        gameHtml = "Round 2 Score:<br><br> Correct: " + rightA + "<br><br> Incorrect: " + wrongA + "<br><br> Unanswered: " + unanswered + "<br><br><br><br><br><br><br><br><button type='button' class='btn btn-primary'>Click here to play Final Round!</button>";
    } else {
    
    gameHtml = "Round 1 Score:<br><br> Correct: " + rightA + "<br><br> Incorrect: " + wrongA + "<br><br> Unanswered: " + unanswered + "<br><br><br><br><br><br><br><br><button type='button' class='btn btn-primary'>Click here to play Round " + btnCounter + "</button>";
    }   
    $("#tvDisplay").removeClass("blankTv").addClass("endTv");
    $("#tvText").addClass("endScore");
    $(".endScore").html(gameHtml);
}

// run out of time on quote
function timeUp(){
    guessed = true;
    unanswered++;
    gameHtml = "<br><br>You ran out of time...<br><br> HINT: " + quotes[counter].hint;
    $("#tvDisplay").addClass("blankTv");
    $("#tvText").addClass("quote");
    $(".quote").html(gameHtml);
    setTimeout(wait, 5000);
}

// win display
function win(){
    loveHateNum = Math.floor(Math.random() * 6);
    rightA++;
    gameHtml = love[loveHateNum];
    $(".quote").html(gameHtml);
    setTimeout(wait, 3000);
}

// lose display
function lose(){
    loveHateNum = Math.floor(Math.random() * 6);
    wrongA++; 
    gameHtml ="<br><br>" + hate[loveHateNum] + " <br><br> The correct answer was...<br><br>" + quotes[counter].correctAnswer + ".";
    $(".quote").html(gameHtml);
    $("#tvDisplay").removeClass("blankTv").addClass("staticTv");
    setTimeout(wait, 4000);
}

// clears TV background
function resetTv (){
    $("#tvDisplay").removeClass("sT0 sT1 sT2 gB0 gB1 gB2 i0 i1 i2 jP0 jP1 jP2 tD0 tD1 tD2 dP0 dP1 dP2 r0 r1 r2 staticTv endTv").addClass("blankTv");
    $("#tvText").removeClass("instructions quote endScore endQuote");
    $(".clock") .removeClass("blinker");
}

// resets game values for next round
function resetGame(){
    clearInterval(timer);
    counter = 0;
    rightA = 0;
    wrongA = 0;
    unanswered = 0;
    clockTimer = 15;
    $(".clock").html("00:" + clockTimer).css("color", "black");
}

// moves through quotes to next screen/determines when round/game is over
function wait() {
    if(counter < 6) {
        counter++;
        getQuote();
        clockTimer = 15;
        clock();
        $(".clock").html("00:" + clockTimer).css("color", "black");
    } else if (finalRound == true){
        endGame();
    } else {
        endScreen();
    }
}

// timer
function clock(){
    clearInterval(timer);
    timer = setInterval(decrement, 1000);
    function decrement(){
        
        if (clockTimer === 0){
            timeUp();
            clearInterval(timer);

        } else if (clockTimer > 0){
            clockTimer--;
            $(".clock").html("00:" + clockTimer);

            if (clockTimer === 0){
                $(".clock").html("00:0" + clockTimer).removeClass("blinker");
                
            } else if (clockTimer <= 5) {
                $(".clock").html("00:0" + clockTimer).addClass("blinker");

            } else if  (clockTimer <= 9){
                $(".clock").html("00:0" + clockTimer).css("color", "red");
            }
        }
    }      
}

