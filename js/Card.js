class Card {
  constructor(data) {
    this.data = data;
  }

  create() {
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");
    placeCard.insertAdjacentHTML('beforeend', `
      <div class="place-card__image">
          <button class="place-card__delete-icon"></button>
      </div>
      <div class="place-card__description">
          <h3 class="place-card__name"></h3>
          <button class="place-card__like-icon"></button>
      </div>`);
    placeCard.querySelector('.place-card__name').textContent = this.data.name;
    placeCard.querySelector('.place-card__image').style.backgroundImage = `url(${this.data.link})`;
    placeCard.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    placeCard.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
    return placeCard;
  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  remove() {
    const card = event.target.parentElement.parentElement;
    card.removeEventListener('click', this.like);
    card.removeEventListener('click', this.remove);
    card.parentElement.removeChild(card);
  }
}