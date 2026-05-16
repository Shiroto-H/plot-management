import AboutIcon from "@/components/ui/AboutIcon";
import BlogIcon from "@/components/ui/BlogIcon";
import PlotManagementIcon from "@/components/ui/ContextGeminiIcon";
import HomeIcon from "@/components/ui/HomeIcon";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <AboutIcon className="w-24 h-24 fill-fuchsia-600 dark:fill-fuchsia-100 hover:fill-fuchsia-300" />
        <BlogIcon className="w-24 h-24 fill-fuchsia-600 dark:fill-fuchsia-100 hover:fill-fuchsia-300" />
        <PlotManagementIcon className="w-24 h-24 fill-fuchsia-600 dark:fill-fuchsia-100 hover:fill-fuchsia-300" />
        <HomeIcon className="w-24 h-24 fill-fuchsia-600 dark:fill-fuchsia-100 hover:fill-fuchsia-300" />

        <h1>Welcome to 素人沼 World!</h1>
      </main>
    </div>
  );
}
