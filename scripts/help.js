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

const questions = new Question([
    {
        question: 'Como faço para me matricular?',
        answer: 'Para se matricular, basta ir até uma de nossas unidades e falar com um de nossos atendentes.'
    },
    {
        question: 'Quais são as formas de pagamento?',
        answer: 'Trabalhamos com cartão de crédito, débito e dinheiro.'
    },
    {
        question: 'Quais são os horários de funcionamento?',
        answer: 'Estamos abertos de segunda a sexta, das 6h às 22h.'
    },
    {
        question: 'Quais são os documentos necessários para a matrícula?',
        answer: 'Para se matricular, basta ir até uma de nossas unidades e falar com um de nossos atendentes.'
    },
    {
        question: 'Como faço para cancelar minha matrícula?',
        answer: 'Para cancelar sua matrícula, basta ir até uma de nossas unidades e falar com um de nossos atendentes.'
    },
    {
        question: 'Como faço para trocar de plano?',
        answer: 'Para trocar de plano, basta ir até uma de nossas unidades e falar com um de nossos atendentes.'
    },
]);

const allQuestion = document.querySelectorAll('.question');

console.log(allQuestion);

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
