
const book = {
    bookName: "Atomic Habits",
    authorName: "James Clear",
    year: 2020,
  };
  
  function puplish() {
    console.log(
      "The book " +
        this.bookName +
        " was written by " +
        this.authorName +
        " in year " +
        this.year
    );
  }
  puplish.call(book);