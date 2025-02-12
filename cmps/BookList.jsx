import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onRemoveBook }) {

    if (!books.length) return <div>No books to show</div>

    return (
        <section className="book-list-container flex justify-center">
            {books.map(book =>
                <div key={book.id} className="book-preview-container">
                    <BookPreview book={book}
                        onRemoveBook={onRemoveBook}
                    />
                </div>
            )}
        </section>
    )
}