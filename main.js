const messageSend = document.querySelector(".message-send")
messageSend.addEventListener("click", () => {
    const messageBlock = document.querySelector(".message-block")
    const messageInput = document.querySelector(".message-input")
    const message = messageInput.value
    const messageHtml = document.createRange().createContextualFragment(`
    <div class="message">
        <h5 class="text">${message}</h5>
    </div>`)
    messageInput.value && messageBlock.appendChild(messageHtml)
    messageInput.value = ""
})