let bookArray = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.9,
    details: [
      { chapter: "Introduction", pages: 20 },
      { chapter: "Chapter 1", pages: 15 },
    ],
  },
];

function uniqueAuthors(bookArr) {
  const authors = bookArr.map((book) => book.author);
  return [...new Set(authors)];
}
console.log(uniqueAuthors(bookArray));

function maximumChapter(bookArr) {
  return bookArr.map((book) => {
    const maxChapter = book.details.reduce(
      (max, detail) => {
        const chapterLength = detail.pages;
        return chapterLength > max.pages
          ? { chapter: detail.chapter, pages: chapterLength }
          : max;
      },
      { chapter: "", pages: 0 }
    );
    return {
      title: book.title,
      chapter: maxChapter.chapter,
    };
  });
}
console.log(maximumChapter(bookArray));
