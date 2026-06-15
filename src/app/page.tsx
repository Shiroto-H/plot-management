import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center">
        <h1>Welcome to 素人沼 World!</h1>
      </main>

      <Footer />
    </div>
  );
}
