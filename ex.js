import * as readline from 'readline';
import chalk from 'chalk';
const questions = [
    {
        question: "Who is the main protagonist of GTA Vice City?",
        options: ["a) Carl Johnson", "b) Tommy Vercetti", "c) Niko Bellic", "d) Claude"],
        answer: "b"
    },
    {
        question: "In which fictional city is GTA Vice City set?",
        options: ["a) Los Santos", "b) Liberty City", "c) Vice City", "d) San Fierro"],
        answer: "c"
    },
    {
        question: "What year is GTA Vice City set in?",
        options: ["a) 1970", "b) 1980", "c) 1986", "d) 1992"],
        answer: "c"
    },
    {
        question: "Who is the main antagonist in GTA Vice City?",
        options: ["a) Sonny Forelli", "b) Lance Vance", "c) Ricardo Diaz", "d) Ken Rosenberg"],
        answer: "c"
    },
    {
        question: "What is the name of the radio station that plays rock music in GTA Vice City?",
        options: ["a) Emotion 98.3", "b) V-Rock", "c) Wave 103", "d) Flash FM"],
        answer: "b"
    },
    {
        question: "Which vehicle is not available in GTA Vice City?",
        options: ["a) Rhino", "b) Infernus", "c) Hydra", "d) Cheetah"],
        answer: "c"
    },
    {
        question: "What business can Tommy Vercetti purchase in GTA Vice City?",
        options: ["a) Malibu Club", "b) 24/7 Supermarket", "c) Burger Shot", "d) Los Santos Customs"],
        answer: "a"
    },
    {
        question: "Who provides Tommy with missions from the film studio in GTA Vice City?",
        options: ["a) Steve Scott", "b) Ricardo Diaz", "c) Avery Carrington", "d) Umberto Robina"],
        answer: "a"
    },
    {
        question: "What is the name of the luxury car dealership that Tommy can purchase in GTA Vice City?",
        options: ["a) Sunshine Autos", "b) Kaufman Cabs", "c) Print Works", "d) Cherry Popper Ice Cream Factory"],
        answer: "a"
    },
    {
        question: "What is the first mission Tommy Vercetti undertakes in GTA Vice City?",
        options: ["a) Rub Out", "b) The Party", "c) In the Beginning", "d) Back Alley Brawl"],
        answer: "c"
    }
];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(question, index) {
    return new Promise((resolve) => {
        console.log(chalk.green(`Q${index + 1}: ${question.question}`));
        question.options.forEach(option => console.log(chalk.magenta(option)));
        rl.question(chalk.green("Your answer (a/b/c/d): "), (answer) => {
            resolve(answer.toLowerCase());
        });
    });
}
async function quiz() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const answer = await askQuestion(q, i);
        if (answer === q.answer) {
            console.log(chalk.green("Correct!\n"));
            score++;
        }
        else {
            console.log(chalk.red(`Wrong! The correct answer is ${q.answer}.\n`));
        }
    }
    console.log(chalk.green(`Your final score is ${score} out of ${questions.length}.`));
    if (score === questions.length) {
        console.log(chalk.cyan("Congratulations! You are the true fan of GTA Vice City!"));
    }
    rl.close();
}
quiz();
