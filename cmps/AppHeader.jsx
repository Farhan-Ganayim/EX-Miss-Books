export function AppHeader({ onSetPage }) {
return (
    <header className="app-header flex align-center justify-between main-layout">
        {/* <section className=""> */}
            <h1 className="header-logo">Miss Book</h1>
            <nav className="app-nav flex">
                <a onClick={()=>onSetPage('home')} href="#">Home</a>
                <a onClick={()=>onSetPage('books')} href="#">Books</a>
                <a onClick={()=>onSetPage('about')} href="#">About</a>

            </nav>
        {/* </section> */}

    </header>
)
}