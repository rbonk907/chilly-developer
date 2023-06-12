import Link from "next/link";
import logo from "images/chilly_dev_logo.svg";
import Image from "next/image";


const Header = () => {

    return (
        <>
            <header className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center bg-white shadow-lg shadow-blue-400/50 px-4 py-3 rounded-lg ml-10">
                    <Link href="/" className="flex items-start gap-x-4 relative">
                        <div className="h-[250px] -top-[95px] -left-[5rem] absolute">
                            <Image src={logo} className="h-full w-auto drop-shadow-lg" alt="logo" />
                        </div>
                        <div className="flex flex-col ml-[175px]">
                            <span className="font-bold text-2xl leading-3 text-blue-800">The</span>
                            <span className="font-bold text-4xl">Chilly Developer</span>
                        </div>
                    </Link>
                    <div>
                        <Link href="/" className="mr-12">Posts</Link>
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;