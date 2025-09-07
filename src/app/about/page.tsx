import Navbar from "../../components/Navbar";

export default function About() {
    return (
        <main>
            <Navbar />
            <section className="max-w-3xl mx-auto p-8">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    I am <span className="font-bold">Karthick</span>, a passionate frontend
                    developer from Chennai, TamilNadu. I enjoy building websites, learning new tech, and
                    creating awesome UI experiences with Next.js and TailwindCSS.
                </p>
            </section>
        </main>
    );
}
