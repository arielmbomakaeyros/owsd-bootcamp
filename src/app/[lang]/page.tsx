import HomePageComp from "./HomePageComp";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback="loading...">
      <main className="flex transition-transform duration-300 min-h-screen flex-col items-center justify-between p-[3rem] md:p-24">
        <HomePageComp />
      </main>
    </Suspense>
  );
}
