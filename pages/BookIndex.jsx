import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.services.js"
import { BookDetails } from "../cmps/BookDetails.jsx"
const { useEffect, useState } = React

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter)
    const [selectedBookId, setSelectedBookId] = useState(null)
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
    function onSelectBook(bookId) {
        setSelectedBookId(bookId)
    }
    // function onSelectBook(bookId) {
    //     bookService.getById(bookId).then((book) => {
    //       setSelectedBook(book)
    //     })
    //   }
    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => setBooks(prevBooks =>
                prevBooks.filter(book => book.id !== bookId)))
    }

    if (!books) return 'Loading..'
    return (
        <section className="book-index">
            {!selectedBookId && (
                <React.Fragment>
                    <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
                    <BookList books={books}
                        onRemoveBook={onRemoveBook}
                        onSelectBook={onSelectBook}
                    />
                </React.Fragment>
            )}
            {selectedBookId && (
                <BookDetails selectedBookId={selectedBookId}
                    onGoBack={() => setSelectedBookId(null)}
                />
            )
            }
        </section>
    )
}
