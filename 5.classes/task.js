class PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
		 this.state = this.state * (150/100);
    }

    set state(fix){
        if (fix<0){
          this._state = 0;
        } else if (fix > 100){
          this._state = 100;
        } else{
          this._state = fix;
        }
      }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
		constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
		this.type = "magazine";
        }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount,){
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
        }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
        }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
        }
}

//задача 2 

class Library{
    constructor(name, books){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let book = null;
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i][type] === value) {
        book = this.books[i];
      }
    }
    return book;
    }

    giveBookByName(bookName){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }             
        }
        return null;
    } 
}