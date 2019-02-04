class BookLink {
  constructor(linkElement){
    this.linkElement = linkElement;
    this.linkData = this.linkElement.dataset.type;
    //console.log(this.linkData);
    if(this.linkData === "all"){
      this.cards = document.querySelectorAll('.book-card');
    }
    else{
      this.cards = document.querySelectorAll(`.book-card[data-type='${this.linkData}']`);
    }
    this.cards = Array.from(this.cards).map(card => new BookCard(card));
    this.linkElement.addEventListener('click', (event) => this.select(event));
  }

  select(event){
    event.preventDefault();
    const links = document.querySelectorAll('.book-link');
    links.forEach(link => link.classList.remove('disabled'));
    const cards = document.querySelectorAll('.book-card');
    cards.forEach(card => card.style.display = 'none');
    this.linkElement.classList.add('disabled');
    this.cards.forEach(card => card.selectCard());
  }

}

class BookCard {
  constructor(card){
    this.card = card;
  }

  selectCard(){
    this.card.style.display = 'flex';
  }
}

let booklink = document.querySelectorAll('.book-link');

booklink.forEach( link => new BookLink(link));