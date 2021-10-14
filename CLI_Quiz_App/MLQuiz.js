const question = require("./Quiz_Questions");
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const chalk = require("chalk");
let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.yellow

var qnumber = 1;
var answer = "";
var username = "";
var note = "";
var score = 0;

var getQueations = () => {
    var data = question.filter((o) => o.no == qnumber);
    data.forEach(nq => {
        console.log(cyan(`\nNo : ${nq.no}`));
        console.log(yellow(`Question : ${nq.ques}`));
        console.log(cyan(`\na: ${nq.a}`));
        console.log(cyan(`\nb: ${nq.b}`));
        console.log(cyan(`\nc: ${nq.c}`));
        console.log(cyan(`\nd: ${nq.d}`));
        answer = nq.ans;
        note = nq.desc;

    })
};

var checkAnswer = () => {
    if(qnumber <=10) {
        rl.question(title("\nGive Answer :"),(ans) => {
            if(ans == "a" || ans == "b" || ans == "c" || ans == "d") {
                if(ans == answer) {
                    score += 5;
                    console.log(green("\n Right Answer:" +ans));
                    console.log(blueBright("Score:" + score));
                    qnumber +=1;
                    repeat();
                }else{
                    score -= 2;
                    console.log(red("\nWrong Answer : " + ans));
                    console.log(blueBright("Score : " + score));
                    console.log(green("\nDiscription: " + note));
                    qnumber += 1;
                    repeat();
                }
            }else {
                console.log(red("\nPlease Select Right Option"));
                repeat();
            }
        });
    }else {
        console.log(title("\nEnd Quiz..."));
        console.log(title(`\nUserName : ${username} \n  Final Score : ${score}`));
        rl.close();
    }
}

var repeat = () => {
    getQueations();
    checkAnswer();
}

console.log(title(...`Welcome Into Machine Learning Quiz...`));
rl.question(title("\n Enter Your Name:-"),(ans) => {
    username = ans;
    repeat();
})