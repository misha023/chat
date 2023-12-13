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
    const usersContainer = document.createRange().createContextualFragment(`
        <main class="users-container">
            <h3 class="name-container">Пользователи</h3>
            <div class="user-list">
                <div class="user">
                    <img src="./chat-logo/0.png" class="logo">
                    <h5 class="name">Admin</h5>
                </div>
                <div class="user">
                    <img src="./chat-logo/1.png" class="logo">
                    <h5 class="name">Франс</h5>
                </div>
                <div class="user">
                    <img src="./chat-logo/2.png" class="logo">
                    <h5 class="name">Старк</h5>
                </div>
                <div class="user">
                    <img src="./chat-logo/3.png" class="logo">
                    <h5 class="name">Джордж</h5>
                </div>
            </div>
        </main>
    `)
    document.querySelector("body").appendChild(usersContainer)

})