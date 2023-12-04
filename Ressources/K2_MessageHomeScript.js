$(document).ready(() => { 
    const messageElement = $("[name='dl_AllMessage']"); 
    const messageText = messageElement.SFCLabel('option', 'text'); 
    const allMessages = messageText.split('|').slice(1);
    const messages = [];
    const authors = [];
    allMessages.forEach(function(item) {
    const parts = item.split('###');
    if (parts.length === 2) {
        messages.push(parts[0]);
        authors.push(parts[1]);
    }
    });
    messageElement.empty(); 
    messages.forEach((message, index) => { 
        if (message.trim()) { 
            const messageDiv = $('<div></div>'); 
            messageDiv.addClass('messageValue'); 
            messageDiv.html(message.trim()); 
            const messageContainer = $('<div></div>'); 
            messageContainer.addClass('message');
            messageContainer.append(messageDiv);

            const messageAuthor = $('<div></div>'); 
            messageAuthor.addClass('messageAuthor'); 
            messageAuthor.html(authors[index].trim()); 
            messageContainer.append(messageAuthor);

            messageElement.append(messageContainer); 
        } 
    }); 
});