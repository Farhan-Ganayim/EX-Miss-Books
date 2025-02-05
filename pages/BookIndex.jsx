import { bookService } from "../services/book.services.js"
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
}