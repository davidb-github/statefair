const contentTarget = document.querySelector(".rides")
const eventHub      = document.querySelector("#state-fair")

// listen for customEvent:"rideTicketSelected" and respond with insertion of <div> element with proper classes
export const RideTicketHolders = () => {
    // listen for event
    eventHub.addEventListener("rideTicketSelected", customEvent => {
        console.log(customEvent)
        
        // insert new <div> element inside of <div> element targeted in contentTarget 
        contentTarget.innerHTML += `
        <div class="person rider"> </div>
        `
    })
}
