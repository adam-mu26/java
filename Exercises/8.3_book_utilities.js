const book1 = {
  name: "Surrounded by idiots",
  author: "Thomas Erikson",
  year: 2014,
};
const book2 = {
  name: "The Fault in Our Stars",
  author: "John Green",
  year: 2012,
};
const bookUtils = {
  gitFirstPublished(book1, book2) {
    let publish = book1.year > book2.year ? book2 : book1;
    return publish;
  },
  setNewEdition(book, editionyear) {
    book.latestEdition = editionyear;
  },
  setLanguage(book, languege) {
    book.newLanguege = languege;
  },
  setTranslation(book, translator, languege) {
    book.translation = {
      translatorName: translator,
      newlanguege: languege,
    };
  },
};

console.log(
  "the first published book.. " + bookUtils.gitFirstPublished(book1, book2).name
);
bookUtils.setNewEdition(book1, 2020);
console.log(book1);

bookUtils.setLanguage(book2, "Arabic");
console.log(book2);

bookUtils.setTranslation(book2, "lee", "chinees");
console.log(book2);
