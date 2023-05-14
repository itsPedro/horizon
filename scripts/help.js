import { getQuestionsList } from "../../utils/misc.js";

const section = document.querySelector('.questions');

class Question {

    constructor(questions) {
        this.question = questions;
        this.displayQuestion();
    }

    displayQuestion() {

        this.question.forEach((cur) => {

            const question = document.createElement('div');
            question.classList.add('question');

            const iconDiv = document.createElement('div');
            iconDiv.classList.add('question-icon');

            const iconI = document.createElement('i');
            iconI.classList.add('fa-solid');
            iconI.classList.add('fa-chevron-down');

            iconDiv.appendChild(iconI);
            question.appendChild(iconDiv);


            const questionContent = document.createElement('div');
            questionContent.classList.add('question-content');

            const questionH2 = document.createElement('h2');
            const answerP = document.createElement('p');



            questionH2.innerHTML = cur.question;
            answerP.innerHTML = cur.answer;


            questionContent.appendChild(questionH2);
            questionContent.appendChild(answerP);

            question.appendChild(questionContent);

            section.appendChild(question);

        });

    }
}

const questions = await getQuestionsList();
new Question(questions);

const allQuestion = document.querySelectorAll('.question');

allQuestion.forEach((question) => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const icon = question.querySelector('.question-icon i');
        if (icon.classList.contains('fa-chevron-down')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});
