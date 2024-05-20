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
  if (message.toLowerCase().includes('itali')) {
    reply = 'You could try Pizza Napoletana';
  } else if (message.toLowerCase().includes('thai')) {
    reply = 'You could try Thai iced tea.';
  } else if (message.toLowerCase().includes('india')) {
    reply = 'You could try Dal Makhani.';
  } else if (message.toLowerCase().includes('japan')) {
    reply = 'You could try Tempura.';
  } else if (message.toLowerCase().includes('mexi')) {
    reply = 'You could try Chiles en nogada.';
  } else if (message.toLowerCase().includes('fren')) {
    reply = 'You could try hearty coq au vin';
  } else if (message.toLowerCase().includes('ye')){
    reply = 
  } else { 'You could try hearty coq au vin';
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
