import Link from "next/link";

export default function Header() {
    return (
        <div className="w-screen fixed z-50 h-22 flex items-center left-1/2 -translate-x-1/2 top-0 bg-[#A4BCD2] shadow-neutral-700 shadow-sm">
            <h1 className="text-black font-semibold text-3xl items-center flex mb-1 p-8">LuminoLens</h1>
            
            <div className="ml-auto select-none flex flex-row items-center">
                <Link href="/" className="p-2 transition-all text-black text-lg hover:text-neutral-700 active:text-neutral-800">Home</Link>

                <Link href="/pricing/" className="p-8 transition-all text-black text-lg hover:text-neutral-700 active:text-neutral-800">Pricing</Link>

                <Link href="/microsite/" className="pr-8 transition-all text-black text-lg hover:text-neutral-700 active:text-neutral-800">Sample microsite</Link>
            </div>
        </div>
    )
}