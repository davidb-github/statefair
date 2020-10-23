// get a reference to html section element with attribute class="entry"
const contentTarget = document.querySelector(".entry")

// hang evenHub on html attribute id: state-fair
const eventHub = document.querySelector("#state-fair")
  //debug
  console.log(eventHub)

// event listener to capture click events and create custom event when rideTicket event is detected
eventHub.addEventListener("click", clickEvent => {
    // debug
    console.log(clickEvent)
    
    // ensure click has clickEvent.target.id of "rideTicket"
    if (clickEvent.target.id === "rideTicket") {
        // create custom event to describe what happened
        const rideTicketSelectedEvent = new CustomEvent("rideTicketSelected", {
            detail: {
                rideTicketSelected: clickEvent.target.value
            }
        })
        // debug code
        console.log(rideTicketSelectedEvent)
        // dispatch rideTicketSelectedEvent event to eventHub
        eventHub.dispatchEvent(rideTicketSelectedEvent)
    }
})


// render html to section element with attribute class="entry"
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
          <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

