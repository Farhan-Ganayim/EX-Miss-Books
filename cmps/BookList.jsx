export function BookList({ books }) {

    return (
        <section>
            <h2>Book List</h2>
            <ul className="book-list">
                {books.map(book =>
                    <li key={book.id}>
                        {book.title} {book.listPrice.amount} {book.listPrice.currencyCode}
                    </li>
                )}
            </ul>
        </section>
    )
}