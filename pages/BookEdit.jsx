const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.services.js"


export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const { bookId } = useParams()

    useEffect(() => {
        if (!bookId) return
        else {
            bookService.getById(bookId)
                .then(bookToEdit => setBookToEdit(bookToEdit))
        }
    }, [bookId])



    function handleChange({ target }) {
        let { value, name: field } = target
        switch (field) {
            case 'title':
                value = target.value || bookToEdit.title
                break
            case 'price':
                if (value !== '') value = +target.value || bookToEdit.listPrice.amount
                break
        }

        if (field === 'price') {
            setBookToEdit((prevBook) => ({ ...prevBook, listPrice: { ...prevBook.listPrice, amount: value } }))
        } else {
            setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
        }
    }

    const navigate = useNavigate()

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then(savedBook => {
                console.log('savedBook', savedBook)
                navigate('/books')
            })

    }

    const { title, listPrice } = bookToEdit
    console.log(bookId)

    return (
        <section className="book-edit">

            <h1>{bookId ? 'Book Edit' : 'Book Add'}</h1>

            <form onSubmit={onSaveBook}>

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={handleChange} name="title" />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" value={listPrice.amount || ''} onChange={handleChange} name="price" />

                <button>Save</button>
            </form>
        </section>

    )
}