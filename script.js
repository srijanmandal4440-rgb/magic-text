const emojis = [
    "💮", "🌚", "🤭", "🫣", "🥰",
    "😚", "🤩", "🙃", "🥹", "😝",
    "🤗", "🥵", "🥴", "🤧", "😻",
    "🌝", "🙈", "💟", "❤️‍🩹", "💞",
    "✨", "💖", "🦋", "💕", "🌸",
    "💫", "😍", "😘", "💗", "🌷"
];

const input = document.getElementById("userText");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const result = document.getElementById("result");
const message = document.getElementById("message");

let generatedText = "";

generateBtn.addEventListener("click", function () {

    const text = input.value.trim();

    if (text.length === 0) {
        alert("Please write something first!");
        return;
    }

    generatedText = "";

    for (let i = 1; i <= text.length; i++) {

        const emoji = emojis[(i - 1) % emojis.length];

        const line = text.substring(0, i) + emoji;

        generatedText += line + "\n";
    }

    result.textContent = generatedText.trim();

    copyBtn.hidden = false;
    message.textContent = "";
});

copyBtn.addEventListener("click", async function () {

    try {
        await navigator.clipboard.writeText(generatedText.trim());

        message.textContent = "Copied Successfully! 💖";

    } catch (error) {
        message.textContent = "Copy failed. Please use a secure connection.";
    }
});