const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const messageInput = document.getElementById('message-input');
const chatOutput = document.getElementById('chat-output');
const chatOutput1 = document.getElementById('chat-output1');
const chatOutput2 = document.getElementById('chat-output2');
const submitButton1 = document.getElementById('submit1');
const submitButton2 = document.getElementById('submit2');

function sendMessage() {
  const message = messageInput.value;

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Hello"}],
     // prompt: `Conversation with ChatGPT:\nUser: ${message}\nChatGPT:`
    })
  })
  .then(response => response.json())
  .then(data => {
    const chatbotResponse = data.choices[0].text.trim();
    chatOutput.innerHTML += `User: ${message}<br>ChatGPT: ${chatbotResponse}<br>`;
  })
  .catch(error => console.error(error));

  //messageInput.value = '';
}

function getMessage1() {
  
    const message1 = submitButton1.value;
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Hello"}],
       // prompt: `Conversation with ChatGPT:\nUser: ${message1}\nChatGPT:`
      })
    })
    .then(response => response.json())
    .then(data => {
      //const chatbotResponse = data.choices[0].text.trim();
   chatOutput1.textContent =  data.choices[0].message.content;
  // chatOutput1.innerHTML += `User: ${message}<br>ChatGPT: ${chatbotResponse}<br>`;

      console.log(data);
    })
    .catch(error => console.error(error));
  
   // messageInput.value = '';
  }

  function getMessage2() {
    
    const message2 = submitButton2.value;
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Hello"}],
     //   prompt: `Conversation with ChatGPT:\nUser: ${message2}\nChatGPT:`
      })
    })
    .then(response => response.json())
    .then(data => {
     // const chatbotResponse = data.choices[0].text.trim();
    //  chatOutput2.innerHTML += `User: ${message}<br>ChatGPT: ${chatbotResponse}<br>`;
      console.log(data);
    })
    .catch(error => console.error(error));
  
    //messageInput.value = '';
  }

  submitButton1.addEventListener('click',getMessage1);
  submitButton2.addEventListener('click',getMessage2);