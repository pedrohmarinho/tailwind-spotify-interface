import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
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
  );
}
