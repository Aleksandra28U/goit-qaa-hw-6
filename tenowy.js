// Wartość THIS we wnętrzu funkcji zależna jest od tego jak i gdzie ta funkcja jest wywoływana.
// Słowo THIS wskazuje na dany obiekt jeżeli funkcja jest metodą danego obiektu.

// 1
// Użycie THIS wewnątrz funkcji niestrzałkowej: uzyskanie dostępu do właściwości i metod obiektu - DOG

// const dog = {
//     color: 'black',
//     breed: 'sheep-dog',

//     getFullDog() {
//         return `${this.color} ${this.breed}`;
//     },
// };

// console.log(dog.getFullDog());


// 2
// W zwykłych funkcjach wartość THIS można zmienić, w funkcjach strzałkowych nie można zmienić wartości THIS wewnątrz strzałki po jej deklaracj
// Wartość THIS pobierana jest z zakresu nadrzędnego

// const city = {
//     street: 'Bardzo szeroka ulica',
//     showMap() {
//         const pokaz = () => {
//             console.log('this in pokaz: ', this);
//         }
//         pokaz();
//         console.log('this in showMap: ', this);
//     },
// };

// city.showMap();







const person = {
    username: 'Maciej',
// Metoda, która napisze imię osoby w konsoli
    showName() {
        console.log(this.username);
    },
};

person.showName();



const bookShelf = {
    authors: [],
    // Metoda zwracająca tablicę autorów przechowywanych na półce z książkami
    getAuthors() {
        return this.authors;
    },
    // Metoda, która przyjmuje imię autora jako argument i dodaje je do tablicy autorów na półce z książkami
    addAuthor(authorName) {
        this.authors.push(authorName);
    },
};
// Dodanie listy autorów do półki na książki
bookShelf.addAuthor('C. S. Levis');
bookShelf.addAuthor('Jacek Dukaj');
bookShelf.addAuthor('Ursula K. LeGuin');
bookShelf.addAuthor('Philip K. Dick');
bookShelf.addAuthor('Ewa Kassala');

// Pobranie listy autorów z półki na książki
const authorsList = bookShelf.getAuthors();
console.log(bookShelf.getAuthors());