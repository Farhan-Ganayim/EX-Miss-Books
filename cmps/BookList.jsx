import { BookPreview } from "./BookPreview.jsx"

export function BookList( {books} ) {

    return (
        <section className="book-list-container">
                {books.map(book =>
                    <div key={book.id} className="book-card">
                        <BookPreview book={book}/>
                    </div>
                )}
        </section>
    )
}