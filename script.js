function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "銀河船") {
        result.textContent = "未決定";
    } else {
        result.textContent = "残念...";
    }
}
