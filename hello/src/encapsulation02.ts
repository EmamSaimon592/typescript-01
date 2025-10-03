class LibraryBook {
  private title: string;
  protected author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  showTitle(): void {
    console.log(`Title: ${this.title}`);
  }
}

class EBook extends LibraryBook {
  showAuthor(): void {
    console.log(`Author: ${this.author}`);
  }
}

const book = new EBook('TypeScript Guide', 'Emam');
book.showTitle();
book.showAuthor();
// book.title; // ❌ Error
// book.author; // ❌ Error
