"use client";
import Link from "next/link";
import { useState } from "react";
import {
  AboutIcon,
  BlogIcon,
  HomeIcon,
  PlotManagementIcon,
} from "@/components/ui/icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. 左上に固定されるボタンの箱 */}
      <div className="fixed top-0 left-0 z-50 p-6">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-zinc-800 transition-colors hover:text-cyan-400 active:text-cyan-400 dark:text-zinc-100"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              viewBox="0 0 100 100"
              width="40"
              height="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Close Menu</title>
              <line x1="20" y1="20" x2="80" y2="80" />
              <line x1="20" y1="80" x2="80" y2="20" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 100 100"
              width="40"
              height="40"
              fill="currentColor"
            >
              <title>Open Menu</title>
              <rect width="100" height="12" rx="6" />
              <rect y="40" width="100" height="12" rx="6" />
              <rect y="80" width="100" height="12" rx="6" />
            </svg>
          )}
        </button>
      </div>

      {/* 2. 画面全体を覆う「すりガラス」の箱 */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col place-items-center-safe overflow-auto  bg-slate-100/45 backdrop-blur-sm">
          <button
            type="button"
            className="fixed inset-0 h-full w-full cursor-default"
            onClick={() => setIsOpen(false)}
            aria-label="メニューを閉じる"
            tabIndex={-1}
          />
          <nav className="relative z-10 w-auto m-auto py-10">
            <Link
              href="/"
              className="group flex flex-col place-items-center-safe gap-y-4"
              onClick={() => setIsOpen(false)}
            >
              <HomeIcon className="h-34 w-34 fill-cyan-500 transition-colors group-hover:fill-cyan-400 group-active:fill-cyan-400" />
              <p className="text-lg font-bold mb-8 transition-colors text-zinc-800 group-hover:text-cyan-400 group-active:text-cyan-400">
                ホーム
              </p>
            </Link>

            <Link
              href="/blogs"
              className="group flex flex-col place-items-center-safe gap-y-4"
              onClick={() => setIsOpen(false)}
            >
              <BlogIcon className="h-34 w-34 fill-cyan-500 transition-colors group-hover:fill-cyan-400 group-active:fill-cyan-400" />
              <p className="text-lg font-bold mb-8 transition-colors text-zinc-800 group-hover:text-cyan-400 group-active:text-cyan-400">
                Qiita記事
              </p>
            </Link>

            <Link
              href="/dashboard"
              className="group flex flex-col place-items-center-safe gap-y-4"
              onClick={() => setIsOpen(false)}
            >
              <PlotManagementIcon className="h-34 w-34 fill-cyan-500 transition-colors group-hover:fill-cyan-400 group-active:fill-cyan-400" />
              <p className="text-lg font-bold mb-8 transition-colors text-zinc-800 group-hover:text-cyan-400 group-active:text-cyan-400">
                プロット管理
              </p>
            </Link>

            <Link
              href="/about"
              className="group flex flex-col place-items-center-safe gap-y-4"
              onClick={() => setIsOpen(false)}
            >
              <AboutIcon className="h-34 w-34 fill-cyan-500 transition-colors group-hover:fill-cyan-400 group-active:fill-cyan-400" />
              <p className="text-lg font-bold mb-8 transition-colors text-zinc-800 group-hover:text-cyan-400 group-active:text-cyan-400">
                このサイトについて
              </p>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
