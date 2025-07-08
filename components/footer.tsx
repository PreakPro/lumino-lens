export default function Footer() {
    return (
        <section className="w-full h-40 z-20 flex flex-row items-center bg-[#66635B] text-white text-xl mt-20">
            <div className="flex flex-col justify-start ml-20">
                <p>© 2025 LuminoLens</p>
                <br/>
                <p>Website by Shaurya Kumar Singh 10G</p>
            </div>

            <div className="justify-end flex flex-1">
                <a href="https://github.com/preakpro" target="_blank" rel="noopener noreferrer">
                    <img src="/github_icon.svg" className="h-20 m-20 cursor-pointer" alt="GitHub" />
                </a>
            </div>
        </section>
    )
}