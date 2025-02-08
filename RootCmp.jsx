import { BookIndex } from "./pages/BookIndex.jsx"
import { Home } from "./pages/Home.jsx"
import { AboutUs } from "./pages/About.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
const { useState } = React

export function App() {
    const [page, setPage] = useState('home')

    function onSetPage(page) {
        setPage(page)
    }


    return (
        <section className="app">
            <AppHeader onSetPage={onSetPage} />
            <main className="main-layout">
                {page === 'home' && <Home />}
                {page === 'about' && <AboutUs />}
                {page === 'books' && <BookIndex />}

                {/* <Home /> */}
                {/* <BookIndex /> */}
            </main>
        </section>
    )
}