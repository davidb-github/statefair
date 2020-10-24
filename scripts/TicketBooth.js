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
    
    // ensure "click" has clickEvent.target.id of "rideTicket"
    if (clickEvent.target.id === "rideTicket") {
        // create custom event to describe what happened
        const rideTicketSelectedEvent = new CustomEvent("rideTicketSelected", {
            detail: {
                rideTicketSelected: clickEvent.target.value
            }
        })
        // debug
        console.log(rideTicketSelectedEvent)
        // dispatch rideTicketSelectedEvent event to eventHub
        eventHub.dispatchEvent(rideTicketSelectedEvent)
    }
    // ensure "click" has clickEvent.target.id of "rideTicket"
    else if (clickEvent.target.id === "foodTicket") {
        const foodTicketSelectedEvent = new CustomEvent("foodTicketSelected", {
            detail: {
                foodTicketSelected: clickEvent.target.value
            }
        })
        // debug
        console.log(foodTicketSelectedEvent)
        eventHub.dispatchEvent(foodTicketSelectedEvent)
    }
    // add if/else logic for foodTicket clickEvent

})


// render html to <section> element with attribute class="entry"
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
          <button id="rideTicket">Ride Ticket</button>
          <button id="foodTicket">Food Ticket</button>
        </div>
    `
}

