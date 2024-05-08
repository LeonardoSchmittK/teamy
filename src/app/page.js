import ProgressModal from "@/components/ProgressModal";
import AddMenu from "@/components/AddMenu";

export default function Home() {
  return (
    <main className="bg-slate-200 w-full h-screen flex items-center justify-center relative">
      <ProgressModal />
      <AddMenu />
    </main>
  );
}
