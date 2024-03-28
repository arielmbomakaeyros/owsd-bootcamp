import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar/NavigationBar";
import Provider from '@/app/common/react-query/Providers';
import { Providers } from "../common/nextui/providers";
import ReduxProvider from "@/redux/provider";
import LayoutChildComp from "./LayoutChildComp";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const date = new Date ()

export const metadata: Metadata = {
  title: `OWSD-BootCamp-${ date.getFullYear() }`,
  description: "Formulaire pour collecter les informations des utilisateurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} relative bg-transparent bg-brokenWhite`}>
      <Toaster
        position="bottom-right"
        toastOptions={{ duration: 10000 }}
      />
      <Provider>
        <ReduxProvider>
          {/* <NavigationBar />
          <div className="absolute right-0 border-l-medium border-blue-500 w-[1620px] h-screen overflow-y-scroll">
            <Providers>
              {children}
            </Providers>
          </div> */}
          <LayoutChildComp childrenD={ children } />
        </ReduxProvider>
      </Provider>
    </div>
  );
}
