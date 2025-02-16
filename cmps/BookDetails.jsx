import { bookService } from "../services/book.services.js"
import { AddReview } from "./AddReview.jsx"
const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails() {

    const [book, setBook] = useState(null)
    const [isShowReviewModal, setIsShowReviewModal] = useState(false)

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

    function onAddReview(newReview) {
        bookService.saveReview(params.bookId, newReview)
            .then(book => {
                setBook(book)
            })
    }

    function onRemoveReview(reviewId) {
        bookService.removeReview(params.bookId, reviewId)
            .then(book => {
                setBook(book)
            })
    }

    function onToggleReviewModal() {
        setIsShowReviewModal((prevIsReviewModal) => !prevIsReviewModal)
    }



    return (
        <section className="book-details-container place-center">
            <h2 className="book-title"> {title}</h2>
            <h4 className="book-subtitle">{subtitle}</h4>
            <section className="book-details flex">
                <img src={thumbnail} alt={title} />
                <div className="book-details-info">
                    <nav className='book-details-nav'>
                        <Link to={`/books/${book.prevBookId}`}>
                            <button><i className="fa-solid fa-arrow-left"></i></button>
                        </Link>
                        <Link to={`/books/${book.nextBookId}`}>
                            <button><i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </nav>
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
            <section className="book-reviews">
                <h3>Reviews</h3>
                {book.reviews && book.reviews.length
                    ? (
                        <section className="book-reviews-container">
                            {book.reviews.map(review => (
                                <div className="book-review" key={review.id}>
                                    <p>name: {review.fullName} {review.rating}</p>
                                    <p>Read at: {review.date}</p>
                                    <p>Review: {review.txt}</p>
                                    <button onClick={() => onRemoveReview(review.id)}>Remove</button>
                                </div>
                            ))}
                        </section>
                    )
                    : (<p>No reviews yet</p>)
                }
                  <button onClick={onToggleReviewModal}>Add+</button>

                    {isShowReviewModal && (
                        <AddReview
                            onAddReview={onAddReview}
                            toggleReview={onToggleReviewModal}
                        />

                    )}
            </section>
        </section>
    )
}
