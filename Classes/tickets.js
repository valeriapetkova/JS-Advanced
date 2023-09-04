function tickets(ticketsArr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this. price = price;
            this.status = status;
        }
    }

    let allTickets = [];

    for (let ticketInfo of ticketsArr) {
        let [destination, price, status] = ticketInfo.split('|');
        price = Number(price);

        allTickets.push(new Ticket(destination, price, status));
    }

    let sortedTickets = allTickets.sort((a, b) => {
        if(typeof a[sortingCriteria] === 'number') {
            return a[sortingCriteria] - b[sortingCriteria];
        } else {
            return (a[sortingCriteria]).localeCompare(b[sortingCriteria]);
        }
    });

    return sortedTickets;
}