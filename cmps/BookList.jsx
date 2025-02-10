import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books , onSelectBook, onRemoveBook}) {

    return (
        <section className="book-list-container flex justify-center">
            {books.map(book =>
                <div key={book.id} className="book-preview-container">
                    <BookPreview book={book}
                        onRemoveBook={onRemoveBook}
                        onSelectBook={onSelectBook}
                    />
                    {/* <button></button> */}
                </div>
            )}
        </section>
    )
}