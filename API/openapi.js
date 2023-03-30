const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const messageInput = document.getElementById('message-input');
const chatOutput = document.getElementById('chat-output');

function sendMessage() {
  const message = messageInput.value;

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: `Conversation with ChatGPT:\nUser: ${message}\nChatGPT:`
    })
  })
  .then(response => response.json())
  .then(data => {
    const chatbotResponse = data.choices[0].text.trim();
    chatOutput.innerHTML += `User: ${message}<br>ChatGPT: ${chatbotResponse}<br>`;
  })
  .catch(error => console.error(error));

  messageInput.value = '';
}

