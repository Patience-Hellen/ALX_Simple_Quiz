function checkAnswer() {
    const correctAnswer = "4"; // Step 1: Define the correct answer

    const selectedOption = document.querySelector('input[name="quiz"]:checked'); // Step 2: Get user's selected radio input

    let userAnswer = null;
    if (selectedOption) {
        userAnswer = selectedOption.value; // Step 3: Extract value if an option was selected
    }

    const feedback = document.getElementById("feedback"); // Step 4: Select feedback display element

    // Step 5: Compare answers and show message
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Step 6: Add event listener to the submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
