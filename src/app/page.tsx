import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold">Hey, I`m Karthi 👋</h1>
        <p className="mt-4 text-lg text-gray-600">
          I build websites with Next.js, TypeScript & TailwindCSS
        </p>
      </section>
    </main>
  );
}
