const library = [
  {
    isbn: '001',
    author: 'Jon Snow',
    book: 'Game of Thrones'
  },
  {
    isbn: '002',
    author: 'Tony Sprano',
    book: 'The Sopranos'
  },
  {
    isbn: '007',
    author: 'Bond',
    book: 'James Bond'
  }
];

console.log('library: ', library);
console.log('typeof library: ', typeof library);

const libraryStringified = JSON.stringify(library);

console.log('libraryStringified: ', libraryStringified);
console.log('tyepof libraryStringified: ', typeof libraryStringified);

const student = '[{"id":"1103248","name":"Wayne"}]';

console.log('student: ', student);
console.log('typeof student: ', typeof student);

const studentParsed = JSON.parse(student);

console.log('studentParsed: ', studentParsed);
console.log('typeof studentParsed: ', typeof studentParsed);
