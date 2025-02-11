const { Link, NavLink } = ReactRouterDOM
export function AppHeader({ onSetPage }) {
    return (
        
        <header className="app-header flex align-center justify-between main-layout">
            {/* <section className=""> */}
            <h1 className="header-logo">Miss Book</h1>
            <nav className="app-nav flex">
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/books">Books</Link>

            </nav>
            {/* </section> */}

        </header>
    )
}