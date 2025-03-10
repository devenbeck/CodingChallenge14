//Task 1 done in html file
//Task 2: Adding support tickets dynamically

function createSupportTicket(customerName, issueDescription, priorityLevel) {
    // Create the main ticket div
    var ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket");
    // Create the customer name heading
    var customerNameHeading = document.createElement("h3");
    customerNameHeading.innerText = customerName;
    ticket.appendChild(customerNameHeading);
    // Create the issue description paragraph
    var issueDescriptionParagraph = document.createElement("p");
    issueDescriptionParagraph.innerText = issueDescription;
    ticket.appendChild(issueDescriptionParagraph);
    // Create the priority level label
    var priorityLabel = document.createElement("label");
    priorityLabel.innerText = "Priority: " + priorityLevel;
    ticket.appendChild(priorityLabel);
    // Create the Resolve button
    var resolveButton = document.createElement("button");
    resolveButton.innerText = "Resolve";
    resolveButton.addEventListener("click", function() {
        ticket.remove();
    });
    ticket.appendChild(resolveButton);
    // Append the ticket to the ticket container
    var ticketContainer = document.getElementById("ticketContainer");
    ticketContainer.appendChild(ticket);
}
// test case
createSupportTicket("Natalie Dev", "Cannot log in to the account", "High");

//Task 3: Converting Node Lists to Arrays for Bulk Updates
function highlightHighPriorityTickets() {
    const highlightHighPriorityTickets = document.querySelectorAll('.high');  //went back to const
    const highPriorityArray = Array.from(highlightHighPriorityTickets);

    highPriorityArray.forEach(ticket => {
        ticket.style.backgroundColor = 'lightgreen'; // background color
        ticket.style.border = '2px solid black'; // add border
    });
    highlightHighPriorityTickets();
}

//Task 4: Implementing Ticket Resolution with Event Bubbling
resolveButton.addEventListener('click', function(event) {
    ticketContainer.removeChild(ticket); // removing ticket from container
    event.stopPropagation();
})
// appending elements to ticket
ticket.appendChild(nameHeading);
ticket.appendChild(issueText);
ticket.appendChild(priorityState);
ticket.appendChild(resolveButton);
ticketContainer.appendChild(ticket); // appending ticket to container
//Task 5: Inline Editing of Support Tickets

//customer name heading
const customerNameHeading = document.createElement("h3");
customerNameHeading.innerText = customerName;
ticket.appendChild(customerNameHeading);
//priority levels
const priorityLabel = document.createElement("label");
//Create the resolve button
const resolvebutton = document.createElement("button");
resolveButton.innerText = "Resolve";

