import Navbar from "../../components/Navbar";
import About from '@/components/About';

export default function Abouts() {
    return (
        <main>
            <Navbar />
            <section className="max-w-3xl mx-auto p-8">
                <About />
            </section>
        </main>
    );
}
