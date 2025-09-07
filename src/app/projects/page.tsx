import Navbar from "../../components/Navbar";

export default function Projects() {
    return (
        <main>
            <Navbar />
            <section className="max-w-4xl mx-auto p-8">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 border rounded-lg shadow bg-white">
                        <h3 className="text-xl font-semibold text-gray-800">Portfolio Website</h3>
                        <p className="text-gray-600">This very site you’re looking at! 🚀</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow bg-white">
                        <h3 className="text-xl font-semibold text-gray-800">Todo App</h3>
                        <p className="text-gray-600">A simple task manager built with Next.js.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
