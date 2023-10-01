const books =[
    {title: "book 1", auther: "author-1", year: 2005},
    {title: "book 2", auther: "author-2", year: 2015},
    {title: "book 3", auther: "author-3", year: 2008},
    {title: "book 4", auther: "author-4", year: 2014},
];
 
 const filteredbook =books
 .filter(book => book.year >=2010)
 .map(book => {
    return {
        title: book.title,
        author: book.auther.toUpperCase(),
        year: book.year,
    };
    
 });
 console.log(filteredbook);