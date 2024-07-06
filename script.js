function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "目") {
        result.textContent = "正解！ 出席番号12番";
    } else {
        result.textContent = "残念...";
    }
}
