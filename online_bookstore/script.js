function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.getBookinfo = function () {
        console.log(`Book title ${this.title}`);
        console.log(`Book written by ${this.author.name}`);
        console.log(`Book genre ${this.genre}`);
        console.log(`Book price ${this.price}`);
    }
}

function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

var author1 = new Author("vamshi", 1999, "American");
var book1 = new Book("How to Study", author1, "Studies", 2000);

console.log(book1);
book1.getBookinfo();