const readline = require('readline');

const questions = [
    {
        category: "Science",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "O2", "CO2"],
        answer: "H2O"
    },
    {
        category: "Geography",
        question: "What is the capital of France?",
        choices: ["Paris", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        category: "Math",
        question: "What is 5 + 3?",
        choices: ["8", "7", "9"],
        answer: "8"
    },
    {
        category: "History",
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        category: "Technology",
        question: "What does HTML stand for?",
        choices: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperTool Multi Language"
        ],
        answer: "HyperText Markup Language"
    }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let score = 0;
let currentQuestionIndex = 0;

function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        const questionText = `Category: ${question.category}\n` +
            `Question: ${question.question}\n` +
            `Choices:\n` +
            question.choices.map((choice, index) => `${index + 1}. ${choice}`).join("\n") +
            `\n\nEnter the number of your choice: `;

        rl.question(questionText, (answer) => {
            const selectedChoice = question.choices[parseInt(answer) - 1];

            if (selectedChoice === question.answer) {
                console.log("Correct!");
                score++;
            } else {
                console.log(`Wrong! The correct answer is: ${question.answer}`);
            }

            currentQuestionIndex++;
            askQuestion();
        });
    } else {
        console.log(`Quiz Over! Your score is: ${score}/${questions.length}`);
        rl.close();
    }
}

// Start the quiz
askQuestion();