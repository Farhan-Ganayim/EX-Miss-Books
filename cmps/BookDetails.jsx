import { bookService } from "../services/book.services.js"
const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails() {

    const [book, setBook] = useState(null)
    const params = useParams()

    useEffect(() => {
        if (!params.bookId) return
        else {
            bookService.getById(params.bookId)
                .then((book) => setBook(book))
        }
    }, [params.bookId])

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
            <button><Link to="/books">Back to List</Link></button>
            <button><Link to={`/books/edit/${params.bookId}`}>Edit Book</Link></button>
        </section>
    )
}
