const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const message = userInput.value;
  const reply = handleRecipeQuestion(message);
  addMessage('user', message);
  addMessage('bot', reply);
  userInput.value = '';
}

function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(message) {
  let reply = '';
  if (message.toLowerCase().includes('Italian')) {
    reply = 'You could try Pizza Napoletana';
  } else if (message.toLowerCase().includes('Chinese')) {
    reply = 'You could try fiery Sichuan hot pots.';
  } else if (message.toLowerCase().includes('Thai')) {
    reply = 'You could try Thai iced tea.';
  } else if (message.toLowerCase().includes('Indian')) {
    reply = 'You could try Dal Makhani.';
  } else if (message.toLowerCase().includes('Japanese')) {
    reply = 'You could try Tempura.';
  } else if (message.toLowerCase().includes('Mexican')) {
    reply = 'You could try Chiles en nogada.';
  } else if (message.toLowerCase().includes('French')) {
    reply = 'You could try hearty coq au vin';
  } else {
    reply = 'Do you enjoy French food?';
  }
  return reply;
}

function handleRecipeQuestion(message) {
  let reply = '';
  if (message.toLowerCase().includes('hi')) {
    reply = 'Hello! What cuisine do you like?';
  } else {
    reply = getReply(message);
  }
  return reply;
}
