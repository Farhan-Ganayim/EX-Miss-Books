
export function Home({onSetPage}) {
    return (
        <section className="home-greeting">
            <h2>Welcome to MissBook Shop!!!</h2>
            <button className="btn-explore-books" onClick={()=>onSetPage('books')}>Explore our Library</button>
        </section>
    )
}
