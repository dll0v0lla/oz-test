document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.querySelector('.chat-form');
    const messageInput = document.getElementById('messageInput');
    const chatScreen = document.querySelector('.chat-screen__texts');

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        sendMessage();
    });

    function sendMessage() {
        const message = messageInput.value.trim();

        if (message !== '') {
            appendMessage(message);
            messageInput.value = '';
        }
    }
    
    function appendMessage(message) {
        const listItem = document.createElement('li');
        listItem.classList.add('text');
        listItem.textContent = message;

        chatScreen.appendChild(listItem);
    }
});
