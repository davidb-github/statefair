// hang eventHub on the top level index.html container..main in this case
const eventHub      = document.querySelector("#state-fair")

// get a ref to the target element
const contentTarget = document.querySelector(".games")
// debug
console.log(contentTarget)

// listen for customEvent: "gameTicketSelected" and respond with insertion of <div> element with proper classes
export const GameTicketHolders = () => {
    // listen for event
    eventHub.addEventListener("gameTicketSelected", customEvent => { 
        // debug
        console.log(customEvent)

        // respond to event detection by inserting new <div> element inside element value held by contentTarget
        contentTarget.innerHTML += `
        <div class="person player"> </div>
        `
    })
}

