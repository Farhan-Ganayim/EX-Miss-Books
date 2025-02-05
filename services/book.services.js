// import { loadFromStorage, saveToStorage } from './storage.service.js'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const BOOK_KEY = 'bookDB'

_createBooks()

export const bookService = {
    query,
    // get,
    // remove,
    // save,
    getEmptyBook,
    getDefaultFilter,
}
function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.title) {
                const regExp = new RegExp(filterBy.title, 'i')
                books = books.filter(book => regExp.test(book.title))
            }
            if (filterBy.amount) {
                books = books.filter(book => book.listPrice.amount >= filterBy.amount)
            }
            return books
        })
}

function getEmptyBook(title = '', amount = 0) {
    return {
        id: '',
        title,
        listPrice: {
            amount,
            currencyCode: 'EUR',
            isOnSale: false
        }
    }
}

function getDefaultFilter() {
    return { title: '', amount: '' }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = [
            _createBook('It Ends with Us', 120),
            _createBook('The Whistler', 190),
            _createBook('The Book Thief', 250)
        ]
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, amount = 150) {
    const book = getEmptyBook(title, amount)
    book.id = utilService.makeId()
    return book
}