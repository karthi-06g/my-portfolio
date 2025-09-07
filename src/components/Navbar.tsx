import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow p-4 flex justify-between">
            <h1 className="font-bold text-xl">Karthi</h1>
            <div className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>
    );
}
