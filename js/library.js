var Library = function(){
};

Library.prototype._bookShelf = new Array();

Library.prototype.addBook = function (bookTitle) {
    if(bookTitle && typeof bookTitle === "string") {
        this._bookShelf.push(bookTitle);
        return true;
}   else {
    console.log("Error :: Book title needs to be a string.");
    }

    return false;
};

Library.prototype.getBooks = function () {
    var hasBooks = false;
    for(var i = 0; i<this._bookShelf.length; i++){
        console.log(this._bookShelf[i]);
    hasBooks = true;
  }
  return hasBooks;
};

Library.prototype.removeBook = function (bookTitle) {
    if (bookTitle && typeof bookTitle === "string")
    for (var i = 0; i < this._bookShelf.length; i++) {
        var currentBook = this._bookShelf[i];
        if (currentBook === bookTitle) {
            this._bookShelf.splice(-1, i);

            return true;
        }
    }
    else {
        console.log("Error :: Book title needs to be a string.");
    }
    return false;
};

document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
//   window.gLibraryTwo = new Library();
});

//["IT", "The Great Gatsby", "Catcher in the Rye"]