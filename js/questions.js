// Utility function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}


// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo"
    ]
  },
  {
    numb: 2,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    options: [
      "Mars",
      "Venus",
      "Jupiter",
      "Saturn"
    ]
  },
  {
    numb: 3,
    question: "What is the capital of Japan?",
    answer: "Tokyo",
    options: [
      "Tokyo",
      "Beijing",
      "Seoul",
      "Bangkok"
    ]
  },
  {
    numb: 4,
    question: "Which element has the chemical symbol 'O'?",
    answer: "Oxygen",
    options: [
      "Oxygen",
      "Osmium",
      "Oxide",
      "Oganesson"
    ]
  },
  {
    numb: 5,
    question: "What year did the Titanic sink?",
    answer: "1912",
    options: [
      "1912",
      "1905",
      "1920",
      "1898"
    ]
  },
  {
    numb: 6,
    question: "Which continent is known as the 'Dark Continent'?",
    answer: "Africa",
    options: [
      "Africa",
      "Asia",
      "Europe",
      "South America"
    ]
  },
  {
    numb: 7,
    question: "Who developed the theory of relativity?",
    answer: "Albert Einstein",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla"
    ]
  },
  {
    numb: 8,
    question: "What is the largest ocean on Earth?",
    answer: "Pacific Ocean",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean"
    ]
  },
  {
    numb: 9,
    question: "Which language has the most native speakers in the world?",
    answer: "Mandarin Chinese",
    options: [
      "Mandarin Chinese",
      "English",
      "Hindi",
      "Spanish"
    ]
  },

  {
    numb: 10,
    question: "What is the hardest natural substance on Earth?",
    answer: "Diamond",
    options: [
      "Diamond",
      "Graphite",
      "Gold",
      "Quartz"
    ]
  },
    /*
  {
    numb: 11,
    question: "What is the smallest country in the world by land area?",
    answer: "Vatican City",
    options: [
      "Vatican City",
      "Monaco",
      "San Marino",
      "Liechtenstein"
    ]
  },
  {
    numb: 12,
    question: "Who is known as the Father of Computers?",
    answer: "Charles Babbage",
    options: [
      "Charles Babbage",
      "Alan Turing",
      "John von Neumann",
      "Blaise Pascal"
    ]
  },
  {
    numb: 13,
    question: "What is the chemical formula for water?",
    answer: "H2O",
    options: [
      "H2O",
      "O2",
      "H2",
      "CO2"
    ]
  },
  {
    numb: 14,
    question: "Which year did World War II end?",
    answer: "1945",
    options: [
      "1945",
      "1939",
      "1940",
      "1949"
    ]
  },
  {
    numb: 15,
    question: "What does HTTP stand for?",
    answer: "HyperText Transfer Protocol",
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Protocol",
      "HyperTransfer Text Protocol",
      "HyperTool Transfer Protocol"
    ]
  },
  {
    numb: 16,
    question: "Which is the largest mammal on Earth?",
    answer: "Blue Whale",
    options: [
      "Blue Whale",
      "Elephant",
      "Giraffe",
      "Hippopotamus"
    ]
  },
  {
    numb: 17,
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    options: [
      "William Shakespeare",
      "Christopher Marlowe",
      "John Milton",
      "Charles Dickens"
    ]
  },
  {
    numb: 18,
    question: "What is the largest desert in the world?",
    answer: "Sahara Desert",
    options: [
      "Sahara Desert",
      "Arctic Desert",
      "Gobi Desert",
      "Kalahari Desert"
    ]
  },
  {
    numb: 19,
    question: "Who was the first President of the United States?",
    answer: "George Washington",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "John Adams"
    ]
  },
  {
    numb: 20,
    question: "Which organ in the human body is responsible for pumping blood?",
    answer: "Heart",
    options: [
      "Heart",
      "Lungs",
      "Brain",
      "Kidneys"
    ]
  }, 
  */ 
  
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
// Shuffle the options for each question
questions = questions.map((q) => {
  const shuffledOptions = shuffleArray([...q.options]); // Create a shuffled copy of options
  return {
    ...q,
    options: shuffledOptions,
    answer: shuffledOptions.find(option => option === q.answer) // Update answer to match the shuffled options
  };
});

// Test to see the randomized options
questions.forEach((q) => {
  console.log(`Question ${q.numb}: ${q.question}`);
  q.options.forEach((option, index) => {
    console.log(`${String.fromCharCode(65 + index)}. ${option}`); // A, B, C, D
  });
  console.log(`Correct Answer: ${q.answer}\n`);
});