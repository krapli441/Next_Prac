import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-around items-center h-screen h-4/5">
        <div className="w-64 h-64 bg-red-500"></div>
        <div className="w-64 h-64 bg-red-500"></div>
        <div className="w-64 h-64 bg-red-500"></div>
        <div className="w-64 h-64 bg-red-500"></div>
      </div>
    </>
  );
}
