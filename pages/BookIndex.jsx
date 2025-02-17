import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.services.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
const { useEffect, useState } = React

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter)

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => {
                console.log('books', books)
                setBooks(books)
            })
    }

    function onSetFilterBy(filterBy) {
        setFilterBy({ ...filterBy })
    }

    function onRemoveBook(bookId) {

        bookService.remove(bookId)
            .then(() => {
                setBooks(prevBooks =>
                    prevBooks.filter(book => book.id !== bookId)
                )
                showSuccessMsg('Book removed successfully!')
            })
            .catch(() => {
                showErrorMsg(`Couldn't remove book`)
            })
    }

    if (!books) return 'Loading..'
    return (
        <section className="book-index">
            <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />

            <BookList books={books} onRemoveBook={onRemoveBook}
            />
        </section>
    )
}
