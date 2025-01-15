import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scholarship Finder</title>
        <meta
          name="description"
          content="Discover schools offering scholarships in the US"
        />
      </Head>
      <header className="header">
        <h1>Scholarship Finder</h1>
        <p>Find the best scholarships for your needs.</p>
      </header>
      <main className="main">
        <section className="search-section">
          <h2>Search Scholarships</h2>
          <input
            type="text"
            placeholder="Search by school name, state, or type"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </section>
        <section className="results-section">
          <h2>Results</h2>
          <div className="results-container">
            <p>No results to display</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2025 Scholarship Finder</p>
      </footer>
    </>
  );
}
