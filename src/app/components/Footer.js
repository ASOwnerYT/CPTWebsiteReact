"use client";

export default function Footer() {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    if (query) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-8 text-center">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search Google"
          className="px-4 py-2 mr-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </form>
      <p>Copyright © John-Allan Lambert, 2025</p>
    </footer>
  );
}
