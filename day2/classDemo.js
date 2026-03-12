class Book{
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=true;
    }
    borrow(){
        this.isAvailable=false;
    }
    returnBook(){
        this.isAvailable=true;
    }
    getInfo(){
        return `${this.title} by ${this.author} , pages:(${this.pages})`;
    }
    isLongBook(){
        return this.pages>300;
    }
}
const b1= new Book("book1"," j.k.Rowling",100)
const b2= new Book("book2"," kalam",200)

const b3= new Book("book3","pothana",200)

const b4= new Book("book4","ananya",400)
const b5= new Book("book5"," lasya",500)
const books=[b1,b2,b3,b4,b5]
for(let book of books)
{
    console.log(book.getInfo());
}

b1.borrow();
b2.borrow();
console.log(b1.title,"Available",b1.isAvailable)
console.log(b2.title,"avaialble",b2.isAvailable)
let count=0;
for(let book of books){
    if(book.isLongBook())
    {
        count++
    }
    console.log("long book",count)
    console.log(" available books");
    for(let book of books){
        if(book.isAvailable){
            console.log(book.getInfo())
        }
    }
}