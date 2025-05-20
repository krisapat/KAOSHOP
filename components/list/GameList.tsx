'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"
import { games } from '@/utils/game'
import FadeUpWhenVisible from '../animation/FadeUpWhenVisible'

type Game = {
    popupImage: string
    name: string
    image: string
}

export default function GameList({ search }: { search: string }) {
    const [modalGame, setModalGame] = useState<Game | null>(null)

    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredGames.map((game) => (
                    <FadeUpWhenVisible key={game.popupImage}>
                        <Card
                            className="rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] flex flex-col h-full"
                        >
                            <CardContent className="flex flex-col flex-1 space-y-4 h-full">
                                {/* รูปภาพ */}
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                                    <Image
                                        src={game.image}
                                        alt={game.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* ชื่อเกม - จำกัดความสูงและใช้ min-height ที่เหมาะสม */}
                                <h2 className="text-lg font-semibold text-center line-clamp-2 min-h-[3rem]">
                                    {game.name}
                                </h2>

                                {/* ปุ่มอยู่ล่างสุดเสมอ */}
                                <div className="mt-auto">
                                    <Button onClick={() => setModalGame(game)} className="w-full">
                                        เช็คราคา
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                    </FadeUpWhenVisible>
                ))}


                {filteredGames.length === 0 && (
                    <div className="col-span-full text-center text-muted-foreground">
                        ไม่พบเกมที่คุณค้นหา
                    </div>
                )}
            </div>

            {/* Modal using shadcn Dialog */}
            {modalGame && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    {/* กล่อง Modal */}
                    <div className="relative w-[90vw] md:w-[80vw] max-w-2xl h-auto max-h-[80vh] bg-white dark:bg-black rounded-xl shadow-xl p-4 overflow-auto border border-white/20 dark:border-white/30">

                        {/* ปุ่มปิด */}
                        <Button
                            onClick={() => setModalGame(null)}
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 text-gray-500 hover:text-black"
                        >
                            <X className="w-5 h-5" />
                        </Button>

                        {/* ชื่อเกม */}
                        <h2 className="text-center text-2xl font-semibold mt-9 mb-4">{modalGame.name}</h2>

                        {/* ภาพเต็มขนาด */}
                        <div className="w-full">
                            <img
                                src={modalGame.popupImage}
                                alt={modalGame.name}
                                className="w-full h-auto object-contain rounded-md"
                            />
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
