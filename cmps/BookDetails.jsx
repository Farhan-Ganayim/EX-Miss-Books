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
        pageCount,
        thumbnail,
        language,
        categories,
        listPrice } = book

    function getBookLng(lng) {
        switch (lng) {
            case 'he':
                return 'Hebrew'
            case 'sp':
                return 'Spanish'
            default:
                return 'English'
        }
    }

    return (
        <section className="book-details-container place-center">
            <h2 className="book-title"> {title}</h2>
            <h4 className="book-subtitle">{subtitle}</h4>
            <section className="book-details flex">
                <img src={thumbnail} alt={title} />
                <div className="book-details-info">
                    <p>
                        <span>price: </span>
                        {listPrice.amount} {listPrice.currencyCode}
                    </p>
                    <p>
                        <span>Language: </span>
                        {getBookLng(language)}

                    </p>
                    <p>
                        <span>description: </span>
                        {description}
                    </p>
                    <p>
                        <span>Category: </span>
                        {categories}
                    </p>
                    <p>
                        <span>Authors: </span>
                        {authors}
                    </p>
                    <p>
                        <span>Number of pages: </span>
                        {pageCount}
                    </p>
                    <button><Link to="/books">Back to List</Link></button>
                    <button><Link to={`/books/edit/${params.bookId}`}>Edit Book</Link></button>
                </div>
            </section>
        </section>
    )
}
