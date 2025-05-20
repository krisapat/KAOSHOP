'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

const menuItems = [
  { image: '/img/swiper/rov.png' },
  { image: '/img/swiper/freefire.png' },
  { image: '/img/swiper/pubg.png' },
  { image: '/img/swiper/genshin.png' },
  { image: '/img/swiper/honkai.png' },
  { image: '/img/swiper/valo.png' },
  { image: '/img/swiper/TFT.png' },
  { image: '/img/swiper/minecraft.png' },
]

export default function Swiperimg() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-[80%] mx-auto relative">
      {/* Custom Navigation Buttons */}
      <Button
        ref={prevRef}
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-black text-black hover:text-white rounded-full shadow"
      >
        <ChevronLeft />
      </Button>
      <Button
        ref={nextRef}
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-black text-black hover:text-white rounded-full shadow"
      >
        <ChevronRight />
      </Button>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop
        spaceBetween={20}
        slidesPerView={1}
      >
        {menuItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden flex justify-center items-center w-full h-full">
              <div className="relative shadow-xl w-full max-w-3xl mx-auto aspect-video">
                <Image
                  src={item.image}
                  alt={`slide-${index}`}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="mt-4 flex justify-center gap-2">
        {menuItems.map((_, idx) => (
          <div
            key={idx}
            className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-black dark:bg-white' : 'w-2.5 bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  )
}
