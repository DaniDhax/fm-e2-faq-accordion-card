// Selecciona el contenedor de preguntas en el HTML
const questionsContainer = document.querySelector(".questions-container");

// Datos de preguntas y respuestas
const questionsData = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },

  // Agrega más objetos de datos según sea necesario
];

// Utilizamos map para generar los elementos de pregunta y respuesta
const questionContents = questionsData.map((data) => {
  // Crea el contenedor para la pregunta y respuesta
  const questionContent = document.createElement("div");
  questionContent.classList.add("question-content");

  // Crea el elemento para la pregunta
  const question = document.createElement("div");
  question.classList.add("question");

  // Crea el elemento para el texto de la pregunta
  const questionText = document.createElement("span");
  questionText.textContent = data.question;

  const breakLine = document.createElement("div");

  // Crea el ícono de flecha utilizando SVG
  const arrowIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  arrowIcon.classList.add("icon-arrow");
  arrowIcon.setAttribute("width", "10");
  arrowIcon.setAttribute("height", "7");

  const arrowPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  arrowPath.setAttribute("d", "M1 .799l4 4 4-4");
  arrowPath.setAttribute("stroke", "#F47B56");
  arrowPath.setAttribute("stroke-width", "2");
  arrowPath.setAttribute("fill", "none");
  arrowPath.setAttribute("fill-rule", "evenodd");

  // Agrega el ícono de flecha al elemento SVG
  arrowIcon.appendChild(arrowPath);

  // Agrega el texto de la pregunta y el ícono al elemento de la pregunta
  question.appendChild(questionText);
  question.appendChild(arrowIcon);

  // Crea el contenedor para la respuesta
  const answerContent = document.createElement("div");
  answerContent.classList.add("answer-content");

  // Crea el párrafo de la respuesta
  const answerParagraph = document.createElement("p");
  answerParagraph.textContent = data.answer;

  // Agrega el párrafo de respuesta al contenedor de respuesta
  answerContent.appendChild(answerParagraph);

  // Agrega los elementos de pregunta y respuesta al contenedor principal
  questionContent.appendChild(question);
  questionContent.appendChild(answerContent);

  questionContent.appendChild(breakLine);
  breakLine.classList.add("break-line");

  // Agrega el evento 'click' para mostrar/ocultar detalles y cambiar la negrita
  question.addEventListener("click", () =>
    toggleDetails(question, questionText)
  );

  // Retorna el elemento de pregunta y respuesta generado por esta iteración
  return questionContent;
});

// Agrega cada elemento de pregunta y respuesta al contenedor principal
questionContents.forEach((questionContent) => {
  questionsContainer.appendChild(questionContent);
});

// Función para mostrar/ocultar detalles y cambiar la negrita
function toggleDetails(question, questionText) {
  const answerContent = question.nextElementSibling;
  const arrowIcon = question.querySelector(".icon-arrow");

  if (answerContent.style.display === "block") {
    answerContent.style.display = "none";
    arrowIcon.style.transform = "rotate(0deg)";
    questionText.style.fontWeight = "normal";
  } else {
    answerContent.style.display = "block";
    arrowIcon.style.transform = "rotate(180deg)";
    questionText.style.fontWeight = "bold";
  }
}

// answerContent.style.margin = '0 10px';
