import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavItem } from "../../components/nav-item";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const years = ["2020", "2021", "2022", "2023"];
  return (
    <html lang="es" className="h-full bg-gray-50">
      <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  {/* <Logo /> */}
                  <span className="">Reportes Alarmas AIC</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  {years.map((e, i) => {
                    return (
                      <NavItem href="/" key={`opt-${e}-year-${e}`}>
                        {/* <UsersIcon className="h-4 w-4" /> */}
                        {e}
                      </NavItem>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/"
              >
                {/* <Logo /> */}
                <span className="">ACME</span>
              </Link>
              {/* <User /> */}
            </header>
            {children}
          </div>
        </div>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
