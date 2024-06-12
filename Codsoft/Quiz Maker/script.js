var quiz = {
    "questions": [
        {
            "id": 1,
            "question": "What does HTML stand for?",
            "options": ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
            "answer": "Hyper Text Markup Language",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which of the following is not a valid HTML tag?",
            "options": ["header", "div", "main", "body"],
            "answer": "main",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "What does CSS stand for?",
            "options": ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
            "answer": "Cascading Style Sheets",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which property is used to change the background color of an element in CSS?",
            "options": ["color", "background-color", "background", "bgcolor"],
            "answer": "background-color",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "What is the correct syntax for referring to an external JavaScript file named 'script.js'?",
            "options": ["script href='script.js'", "script name='script.js'", "script src='script.js'", "script link='script.js'"],
            "answer": "script src='script.js'",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which of the following is not a valid way to declare a variable in JavaScript?",
            "options": ["var x = 10;", "let y = 20;", "const z = 30;", "variable w = 40;"],
            "answer": "variable w = 40;",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "What is the purpose of the 'git clone' command in Git?",
            "options": ["To create a new branch", "To clone a repository from a remote server", "To merge two branches", "To delete a branch"],
            "answer": "To clone a repository from a remote server",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "What is the correct way to add an external CSS file to an HTML document?",
            "options": ["css src='styles.css'", "link href='styles.css' rel='stylesheet'", "style src='styles.css'", "link href='styles.css' type='text/css'"],
            "answer": "link href='styles.css' rel='stylesheet'",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "Which of the following is a programming language used for server-side scripting?",
            "options": ["HTML", "CSS", "JavaScript", "PHP"],
            "answer": "PHP",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "What is the purpose of the 'npm install' command in Node.js?",
            "options": ["To update Node.js to the latest version", "To install dependencies for a Node.js project", "To uninstall Node.js from the system", "To start a new Node.js project"],
            "answer": "To install dependencies for a Node.js project",
            "score": 0,
            "status": ""
        }
    ]
};


var QuizApp = function () {
    this.score = 0;
    this.currentQuestion = 0;
    this.totalQuestions = quiz.questions.length;

    this.displayQuestion = function () {
        var question = quiz.questions[this.currentQuestion];
        document.getElementById("question").innerHTML = question.question;
        var optionsHTML = "";
        question.options.forEach(function (option, index) {
            optionsHTML += '<div class="option-block"><input type="radio" id="option' + index + '" name="option" value="' + option + '"><label for="option' + index + '">' + option + '</label></div>';
        });
        document.getElementById("question-options").innerHTML = optionsHTML;
    };

    this.checkAnswer = function () {
        var selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            var userAnswer = selectedOption.value;
            var correctAnswer = quiz.questions[this.currentQuestion].answer;
            if (userAnswer === correctAnswer) {
                quiz.questions[this.currentQuestion].score = 1;
            }
        }
    };

    this.changeQuestion = function (direction) {
        this.checkAnswer();
        this.currentQuestion += direction;
        if (this.currentQuestion < 0) {
            this.currentQuestion = 0;
        } else if (this.currentQuestion >= this.totalQuestions) {
            this.currentQuestion = this.totalQuestions - 1;
            this.showResult();
        }
        this.displayQuestion();
    };

    this.showResult = function () {
        var resultHTML = "<h2>Quiz Completed!</h2>";
        quiz.questions.forEach(function (question) {
            resultHTML += "<div class='result-question'>" +
                "<p><strong>Question:</strong> " + question.question + "</p>" +
                "<p><strong>Answer:</strong> " + question.answer + "</p>" +
                "<p><strong>Status:</strong> " + (question.score === 1 ? "<span class='correct'>Correct</span>" : "<span class='wrong'>Wrong</span>") + "</p>" +
                "</div>";
        });
        document.getElementById("result").innerHTML = resultHTML;
    };
};

var quizApp = new QuizApp();

document.addEventListener("DOMContentLoaded", function () {
    quizApp.displayQuestion();

    document.getElementById("next").addEventListener("click", function () {
        quizApp.changeQuestion(1);
    });

    document.getElementById("previous").addEventListener("click", function () {
        quizApp.changeQuestion(-1);
    });
});
