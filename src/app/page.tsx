import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home()
{
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-col min-h-screen lg:flex-row">
        {/* Main Content */}
        <main className="flex-1 bg-green-500 p-4 text-white lg:order-3">
          <h2 className="text-xl font-semibold">Main Content</h2>
          <p>This is the main content area.</p>
        </main>

        {/* Sidebar */}
        <aside className="bg-red-500 p-4 text-white lg:order-1">
          <h2 className="text-xl font-semibold">Sidebar</h2>
          <p>This is the sidebar.</p>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
