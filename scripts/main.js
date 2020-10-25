// Import functions from external modules
import { FoodTicketHolders } from './food/FoodTicketHolder.js';
import { RideTicketHolders } from './rides/RideTicketHolders.js';
import { GameTicketHolders } from './games/GameTicketHolder.js';
import { TicketBooth }       from './TicketBooth.js';

// invoke page builder functions
TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();

