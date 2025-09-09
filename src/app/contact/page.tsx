import Navbar from "../../components/Navbar";
import Contact from '@/components/Contact';

export default function Contacts() {
    return (
        <main>
            <Navbar />
            <section className="max-w-4xl mx-auto p-8">
                <Contact />
            </section>
        </main>
    )
}