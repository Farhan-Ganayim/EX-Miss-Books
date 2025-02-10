import { bookService } from "../services/book.services.js"
const { useEffect, useState } = React

export function BookDetails({ selectedBookId, onGoBack }) {
    //  let book = bookService.getById(selectedBook)

    const [book, setBook] = useState(null)
    useEffect(() => {
        if (!selectedBookId) return
        else {
            bookService.getById(selectedBookId)
                .then((book) => setBook(book))
        }
    })

    if (!book) return <div>Loading...</div>
    const { title,
        subtitle,
        authors,
        description,
        thumbnail,
        language,
        categories,
        listPrice } = book

    return (
        <section className="book-details">
            <img src={thumbnail} alt={title} />

            <div className="book-details-info">
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
                <p>Price: {listPrice.amount} {listPrice.currencyCode}</p>
                <p>{description}</p>
            </div>
            <button onClick={onGoBack}>Back to List</button>
        </section>
    )
}
