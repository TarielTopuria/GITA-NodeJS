class Library {
  #bookList = [];

  addBook(title, author, year) {
    const newBook = {
      title,
      author,
      year,
    };

    this.#bookList.push(newBook);
  }

  removeBook(title) {
    const bookIndex = this.#bookList.findIndex((book) => book.title === title);

    if (bookIndex !== -1) {
      this.#bookList.splice(bookIndex, 1);
      console.log(`'${title}' removed from the library.`);
    } else {
      console.log(`'${title}' not found in the library.`);
    }
  }

  listBooks() {
    if (this.#bookList.length === 0) {
      console.log("No books in the library.");
    } else {
      this.#bookList.forEach((book) =>
        console.log(
          `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`
        )
      );
    }
  }
}

const myLib = new Library();
myLib.addBook("He Died With His Eyes Open", "Derek Raymond", 1984);
myLib.addBook("The Road", "Cormac McCarthy", 2006);
myLib.listBooks();
myLib.removeBook("The Road");
myLib.listBooks();
myLib.removeBook("The Road");
