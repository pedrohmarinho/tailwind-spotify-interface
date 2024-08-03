import { HomeIcon, Search, LibraryBig } from "lucide-react";

export default function Sidebar() {
  return (
    <aside id="Sidebar" className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200  hover:text-zinc-500 "
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200  hover:text-zinc-500 "
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200  hover:text-zinc-500 "
        >
          <LibraryBig />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          American Recordings
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          American II: Unchained
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          American III: Solitary Man
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          The Man Comes Around
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          At Folsom Prison
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Unearthed
        </a>
      </nav>
    </aside>
  );
}
