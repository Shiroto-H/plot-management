import {
  AboutIcon,
  BlogIcon,
  HomeIcon,
  PlotManagementIcon,
} from "@/components/ui/icons";

export default function Header() {
  return (
    <div className="flex  flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <nav className="flex flex-1 w-full max-w-3xl items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <HomeIcon className="w-24 h-24 fill-cyan-600 dark:fill-cyan-100 hover:fill-cyan-300" />
        <BlogIcon className="w-24 h-24 fill-cyan-600 dark:fill-cyan-100 hover:fill-cyan-300" />
        <PlotManagementIcon className="w-24 h-24 fill-cyan-600 dark:fill-cyan-100 hover:fill-cyan-300" />
        <AboutIcon className="w-24 h-24 fill-cyan-600 dark:fill-cyan-100 hover:fill-cyan-300" />
      </nav>
    </div>
  );
}
