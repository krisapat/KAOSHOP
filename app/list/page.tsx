import SeachgameClient from "@/components/list/SeachgameClient";


export default function GamesPage() {
  return (
    <div className="relative h-min-screen p-6 pt-25">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/1 via-white/70 to-transparent dark:from-white/10 dark:via-[#0c0c0c]/50 dark:to-transparent" />
      </div>
      <div className="relative z-10">
        <SeachgameClient />
      </div>
    </div>
  )
}
