import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="container max-w-7xl mx-auto p-10">

        <div className="flex lg:items-center  lg:flex-row flex-col gap-10 mb-5">
          <div className="border-8 boder-white w-24 h-24 flex items-center justify-center">
            <p className="text-9xl font-black">&gt;_</p>
          </div>
          <h1 className="text-9xl font-black">APTPD</h1>
        </div>

        <p className="text-4xl">Development studio based in Japan.</p>
        <p className="mt-10">&copy;AP合同会社。</p>
      </div>
      {/* <footer className="container max-w-7xl mx-auto pxp-10 py-5 text-sm">
        
      </footer> */}
    </div>
  );
}
