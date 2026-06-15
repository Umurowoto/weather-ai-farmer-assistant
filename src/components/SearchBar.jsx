import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search a town (e.g. Thika, Eldoret)..."
        className="flex-1 rounded-lg border border-forest/20 bg-white px-4 py-2 text-forest-dark placeholder:text-forest/40 focus:outline-none focus:ring-2 focus:ring-amber"
      />
      <button
        type="submit"
        className="rounded-lg bg-forest px-4 py-2 font-medium text-cream transition hover:bg-forest-dark"
      >
        Search
      </button>
    </form>
  );
}
