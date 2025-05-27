"use client";
import Link from "next/link";

export default function Footer() {
  // Function called when "Search" button is pressed
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Get the search query from the input field
    const query = event.target.elements.search.value;
    // Open a new tab with the Google search results for the query
    if (query) {
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        "_blank"
      );
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-8 text-center">
      <ul className="mb-6">
        <li className="mb-2">
          <Link href="/" className="text-blue-400 hover:underline">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/languages/scratch" className="text-blue-400 hover:underline">
            Scratch
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/languages/webdev" className="text-blue-400 hover:underline">
            Web Development
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/languages/python" className="text-blue-400 hover:underline">
            Python
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/contact" className="text-blue-400 hover:underline">
            Contact
          </Link>
        </li>
      </ul>

      {/* Search form */}
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search Google"
          className="px-4 py-2 mr-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>

      <div className="flex justify-center gap-8 mb-6">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-sky-400"
        >
          {/* Twitter SVG */}
          <svg width="2rem" height="2rem" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.696.116 1.025C7.728 9.36 4.1 7.57 1.67 4.98a4.49 4.49 0 0 0-.607 2.26c0 1.56.795 2.94 2.006 3.75a4.47 4.47 0 0 1-2.034-.563v.057c0 2.18 1.55 4 3.604 4.42a4.5 4.5 0 0 1-2.027.077c.572 1.785 2.23 3.085 4.195 3.12A8.99 8.99 0 0 1 2 19.54a12.7 12.7 0 0 0 6.92 2.03c8.3 0 12.84-6.87 12.84-12.83 0-.2-.01-.4-.02-.6A9.22 9.22 0 0 0 24 4.59a8.94 8.94 0 0 1-2.54.7z"/>
          </svg>
        </a>
        <a
          href="https://github.com/ASOwnerYT/CPTWebsiteReact"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-sky-400"
        >
          {/* GitHub SVG */}
          <svg width="2rem" height="2rem" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.197 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-sky-400"
        >
          {/* LinkedIn SVG */}
          <svg width="2rem" height="2rem" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/>
          </svg>
        </a>
      </div>

      <p>Copyright © John-Allan Lambert, 2025</p>
    </footer>
  );
}
