import Image from "next/image";
import Dashboard from "@/component/main/dashboard";
import "@/app/globals.css";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Dashboard />
      
    </main>
  );
}
