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

//Task 3: