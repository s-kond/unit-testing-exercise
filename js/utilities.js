function toggleBookmark(cards, id) {
  return cards.map(card => {
    if(card.id === id){
      return { ...card, bookmarked: !card.bookmarked}
    } else {
      return card
    }
  })

}

/* toggleBookmark(cards, id); */
export { toggleBookmark };
