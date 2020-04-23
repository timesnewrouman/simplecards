class CardList {
    constructor(container, createCard) {
        this.container = container;
        this.createCard = createCard;
    }

    addCard(data) {
        const card = this.createCard(data);
        this.container.appendChild(card.create());
    }

    render(array) {
        for (const element of array) {
            const cardObject = {
                name: element.name,
                link: element.link
            };
            cardList.addCard(cardObject);
        }
    }
}