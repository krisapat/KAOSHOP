'use client'

import { Undo2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Seachgame({
  search,
  setSearch,
}: {
  search: string
  setSearch: (val: string) => void
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <Input
        placeholder="ค้นหาเกม..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      <Button asChild variant="outline">
        <Link href="/"><Undo2 className="w-4 h-4 mr-2" /> กลับหน้าแรก</Link>
      </Button>
    </div>
  )
}
