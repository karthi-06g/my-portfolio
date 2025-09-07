import Navbar from "../../components/Navbar";

export default function Projects() {
    return (
        <main>
            <Navbar />
            <section className="max-w-3xl mx-auto p-8">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>
                <div className="space-y-4">
                    <div className="p-4 border rounded">Portfolio Website</div>
                    <div className="p-4 border rounded">Todo App</div>
                </div>
            </section>
        </main>
    );
}
