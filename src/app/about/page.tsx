import Navbar from "../../components/Navbar";

export default function About() {
    return (
        <main>
            <Navbar />
            <section className="max-w-3xl mx-auto p-8">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p>
                    I`m Karthi, a frontend developer passionate about React, Next.js and
                    building cool stuff.
                </p>
            </section>
        </main>
    );
}
