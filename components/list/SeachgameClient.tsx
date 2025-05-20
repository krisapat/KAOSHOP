'use client'

import { useState } from "react"
import Seachgame from "./Seach"
import GameList from "./GameList"
import FadeUpWhenVisible from "../animation/FadeUpWhenVisible"


export default function SeachgameClient() {
  const [search, setSearch] = useState("")

  return (
    <div className="space-y-6">
      <FadeUpWhenVisible>
        <h2 className="text-4xl font-semibold">รายการเกม</h2>
      </FadeUpWhenVisible>
      <FadeUpWhenVisible>
        <Seachgame search={search} setSearch={setSearch} />
      </FadeUpWhenVisible>
      <GameList search={search} />
    </div>
  )
}
