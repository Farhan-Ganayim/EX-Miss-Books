import { BookPreview } from "./BookPreview.jsx"
const { Link } = ReactRouterDOM


export function BookList({ books, onRemoveBook }) {

    if (!books.length) return <div>No books to show</div>

    return (
        <section className="book-list-container flex justify-center">
            <div className="add-book-container">

               <button>
                <Link to="/books/edit">Add Book</Link>
                </button> 
                
            </div>

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