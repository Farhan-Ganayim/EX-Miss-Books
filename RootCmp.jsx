const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { BookIndex } from "./pages/BookIndex.jsx"
import { Home } from "./pages/Home.jsx"
import { AboutUs } from "./pages/About.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"

export function App() {
    const [page, setPage] = useState('home')

    function onSetPage(page) {
        setPage(page)
    }


    return (
        <Router>

            <section className="app">
                <AppHeader onSetPage={onSetPage} />
                <main className="main-layout">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/books" element={<BookIndex/>} />
                        <Route path="/about" element={<AboutUs/>} />
                    </Routes >
                </main>
            </section>
        </Router>

    )
}