

export function BookPreview({book}) {

    // console.log(book)
    
    return (

        <article className="book-preview">
            <img
                className="book-preview-img"
                src={book.thumbnail}
                alt={book.title}
            />

            <div className="book-preview-info">
                <h2 className="book-preview-title">{book.title}</h2>
                <p className="book-preview-authors">By: {book.authors}</p>
                <p className="book-preview-price">Price: {book.listPrice.amount}</p>
            </div>
        </article>
    )
}