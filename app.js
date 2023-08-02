const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const chatLog = document.getElementById("chat-log");
const messageItem = document.createElement("li");
// const API_KEY = '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';


chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = messageInput.value;
    messageInput.value = "";

    const options = {
        method: 'POST',
        max_tokens: 256,
        temperature: 0.7,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            "Authorization": 'Bearer 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',

        },
        body: JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{"role": "user", "content": message}],
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        })
    };

    fetch('https://api.openai.com/v1/chat/completions', options)
        .then(response => response.json())
        .then(response => {
            const messageRespons = response.choices[0].message.content;
            messageItem.textContent = messageRespons;
            chatLog.appendChild(messageItem);
        })
        .catch(err => console.error(err));
});


