// get a ref to the target element
const contentTarget = document.querySelector(".food")

// hang eventHub on top level container...main here
const eventHub      = document.querySelector("#state-fair")

// listen for customEvent: "foodTicketSelected" and respond with insertion of <div> element with proper classes
export const FoodTicketHolders = () => {
    // listen for event and 
    eventHub.addEventListener("foodTicketSelected", customEvent => {
        // debug
        console.log(customEvent)
        
        // insert new <div> element inside of <div> element targeted in contentTarget
        contentTarget.innerHTML += `
        <div class="person eater"> </div>
        `
    })
}
