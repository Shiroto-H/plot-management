export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50 py-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-4xl items-center justify-center px-6">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          &copy; {currentYear} Shiroto-H. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
