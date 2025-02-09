

export function BookPreview({ book }) {

    return (
        <article className="book-card">
            <img
                className="book-card-img"
                src={book.thumbnail}
                alt={book.title}
            />

            <div className="book-card-info">
                <h2 className="book-title">{book.title}</h2>
                <p className="info-line book-authors">
                    <span>By:</span>
                    <span>{book.authors}</span>
                </p>
                <p className="info-line book-price">
                    <span>Price:</span>
                    <span>{book.listPrice.amount}</span>
                </p>
            </div>
        </article>
    )
}