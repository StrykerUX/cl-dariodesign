import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Portafolio de Dario Achirica</h1>
            <p className="text-xl">Diseño Multimedia Creativo</p>
          </div>
        </section>
      </main>
    </div>
  );
}
