const messageSend = document.querySelector(".message-send")
messageSend.addEventListener("click", () => sendMessage())

function sendMessage() {
    const messageBlock = document.querySelector(".message-block")
    const messageInput = document.querySelector(".message-input")
    const message = messageInput.value
    const messageHtml = document.createRange().createContextualFragment(`
    <div class="message my-message">
        <h5 class="text">${message}</h5>
    </div>`)
    messageInput.value && messageBlock.appendChild(messageHtml)
    messageInput.value = ""
}

document.addEventListener("keydown", event => {
    if (event.key == "Enter") {
        sendMessage()
    }
})

const userButtons = document.querySelectorAll(".chat-container .chat-link")
userButtons.forEach((element) => {
    element.addEventListener("click", (element) => {
        const messageContainer = document.querySelector("main.message-container")
        messageContainer.style.display = "flex"
        const userName = element.target.querySelector(".chat-name").innerText
        const userLogoSrc = element.target.querySelector(".chat-logo").getAttribute("src")
        const messageUserBlock = document.querySelector(".message-container .user-block")
        messageUserBlock.querySelector(".user-logo").setAttribute("src", userLogoSrc)
        messageUserBlock.querySelector(".user-name").innerText = userName
    })
})

const buttonPageUsers = document.querySelector(".chat-container .users-view")
buttonPageUsers.addEventListener("click", () => {
    const messageContainer = document.querySelector("main.message-container")
    messageContainer.style.display = "none"
})