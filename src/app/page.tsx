import react from "react";
import {
  Home as HomeIcon,
  Search,
  LibraryBig,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  Repeat,
  SkipForward,
  Laptop2,
  LayoutList,
  Mic2,
  Volume,
  Maximize2,
} from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div id="divGlobal" className="h-screen flex flex-col">
      <div id="divSidebarMain" className="flex flex-1">
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

        <main className="flex-1 p-6">
          <div className="flex items-center gap-5">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon!</h1>

          <div className="grid grid-cols-3 gap-4 mt-5">
            {/*Grid das playlist recomendadas pelo Spotify */}

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album1.jpg"
                width={104}
                height={104}
                alt="Jhonny Cash"
              />
              <strong>American Recordings</strong>
              <button className="w-12 h-12 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album2.jpg"
                width={104}
                height={104}
                alt="Jhonny Cash"
              />
              <strong>American II: Unchained</strong>
              <button className="w-12 h-12 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album3.jpg"
                width={104}
                height={104}
                alt="Jhonny Cash"
              />
              <strong>American III: Solitary Man</strong>
              <button className="w-12 h-12 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album4.jpg"
                width={104}
                height={104}
                alt="Jhonny Cash"
              />
              <strong>The Man Comes Around</strong>
              <button className="w-12 h-12 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album5.jpg"
                width={104}
                height={104}
                alt="Jhonny Cash"
              />
              <strong>At Folsom Prison</strong>
              <button className="w-12 h-12 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10"
            >
              <Image
                src="/album6.jpg"
                width={104}
                height={104}
                alt="Jhonny Cash"
              />
              <strong>Unearthed</strong>
              <button className="w-12 h-12 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Pedro Marinho
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album3.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Jhonny Cash"
              />
              <strong className="font-semibold">Teste</strong>
              <span className="text-sm text-zinc-500">Cash, Jhonny</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album3.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Jhonny Cash"
              />
              <strong className="font-semibold">Teste</strong>
              <span className="text-sm text-zinc-500">Cash, Jhonny</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album3.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Jhonny Cash"
              />
              <strong className="font-semibold">Teste</strong>
              <span className="text-sm text-zinc-500">Cash, Jhonny</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album3.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Jhonny Cash"
              />
              <strong className="font-semibold">Teste</strong>
              <span className="text-sm text-zinc-500">Cash, Jhonny</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album3.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Jhonny Cash"
              />
              <strong className="font-semibold">Teste</strong>
              <span className="text-sm text-zinc-500">Cash, Jhonny</span>
            </a>
          </div>
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/album1.jpg"
            className="w-full"
            width={45}
            height={45}
            alt="Jhonny Cash"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Hurt</strong>
            <span className="text-xs text-zinc-400">Jhonny Cash</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200"></Shuffle>
            <SkipBack size={20} className="text-zinc-200"></SkipBack>

            <button className="w-10 h-10 flex items-center pl-0.5 justify-center rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-200"></SkipForward>
            <Repeat size={20} className="text-zinc-200"></Repeat>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-zinc-400">0:50</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">3:19</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20}></Mic2>
          <LayoutList size={20}></LayoutList>
          <Laptop2 size={20}></Laptop2>
          <div className="flex items-center gap-2">
            <Volume size={20}></Volume>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20}></Maximize2>
        </div>
      </footer>
    </div>
  );
}

// O Tailwind CSS usa uma escala de espaçamento baseada em múltiplos de 4. Por exemplo, padding 6 (p-6) na verdade é 1.5rem, o que equivale a 24px (1.5rem x 16px = 24px).

// Tailwind CSS usa uma escala para definir valores de espaçamento que são baseados em unidades rem. Esta escala se traduz em valores em pixels (assumindo que 1rem = 16px). Aqui está como funciona:

/*
  0.25rem = 4px
  0.5rem = 8px
  0.75rem = 12px
*/
