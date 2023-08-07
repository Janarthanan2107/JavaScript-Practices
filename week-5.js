// 1.Create a simple calculator that takes two numbers and an operator (+, -, *, or /) as input and displays the result when a "Calculate" button is clicked.
const num1 = document.getElementById("num1");
const operator = document.getElementById("operator");
const num2 = document.getElementById("num2");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");

let result = null;

submitBtn.addEventListener("click", () => {
    const n1 = parseInt(num1.value);
    const n2 = parseInt(num2.value);
    const op = operator.value;

    switch (op) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
        default:
            resultEl.innerText = "Invalid Operator";
            return;
    }

    resultEl.innerText = "Result: " + result;
});

// 2. Create a random quote generator that displays a new quote from an array of quotes when a "Generate Quote" button is clicked.
const quotes = [
    "The true revolutionary is guided by a great feeling of love. It is impossible to think of a genuine revolutionary lacking this quality. - Che Guevara",

    "If you tremble with indignation at every injustice, then you are a comrade of mine. - Che Guevara",

    "Silence is argument carried out by other means. - Che Guevara",

    "The revolution is not an apple that falls when it is ripe. You have to make it fall. - Che Guevara",

    "In a revolution, one triumphs or dies. - Che Guevara",

    "The revolution is made through human beings, but individuals must forge their revolutionary spirit day by day. - Che Guevara",

    "Many will call me an adventurer – and that I am, only one of a different sort: one of those who risks his skin to prove his platitudes. - Che Guevara",

    "I don't care if I fall as long as someone else picks up my gun and keeps on shooting. - Che Guevara",

    "The first duty of a revolutionary is to be educated. - Che Guevara",

    "At the risk of seeming ridiculous, let me say that the true revolutionary is guided by a great feeling of love. - Che Guevara"
];

const generateQuote = () => {
    const quoteEl = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.innerText = quotes[randomIndex];
};

// 3. Create a form with name and email fields. Display an error message if the name is empty or the email format is invalid when a "Submit" button is clicked.
const validateForm = () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const errorElement = document.getElementById("error");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "") {
        errorElement.innerText = "Name cannot be empty.";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorElement.innerText = "Invalid email format.";
        return;
    }

    errorElement.innerText = "";
};

//4.

//5.Create a password strength meter that evaluates the strength of a password and provides feedback as the user types.
const passwordInput = document.getElementById("password");
const passwordStrengthEl = document.getElementById("passwordStrength");

const checkPasswordStrength = () => {
    const password = passwordInput.value;
    const strength = password.length;
    const feedback = getStrengthFeedback(strength);

    passwordStrengthEl.innerText = feedback;
};

const getStrengthFeedback = (strength) => {
    if (strength < 6) {
        return "Weak";
    } else if (strength >= 6 && strength < 10) {
        return "Moderate";
    } else {
        return "Strong";
    }
};

passwordInput.addEventListener("input", () => {
    checkPasswordStrength();
});

// 7.Create a "Scroll to Top" button that appears when the user scrolls down and takes them to the top of the page when clicked.
const scrollToTopButton = document.querySelector(".scroll-to-top");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function toggleScrollToTopButton() {
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

window.addEventListener("scroll", toggleScrollToTopButton);

// 10.Write a JavaScript function to parameterize a string.

function string_parameterize(str) {
    return str.replace(/\s+/g, "-").toLowerCase();
}

console.log(string_parameterize("Robin Singh from USA."));
// Output: "robin-singh-from-usa"
