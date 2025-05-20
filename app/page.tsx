import FadeUpWhenVisible from "@/components/animation/FadeUpWhenVisible";
import Swiperimg from "@/components/animation/Swiper";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Home section */}
      <div className="relative h-min-screen w-full pt-25">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/1 via-white/70 to-transparent dark:from-white/10 dark:via-[#0c0c0c]/50 dark:to-transparent" />
        </div>
        <div className="relative z-10">
          <h1 className="sour-gummy-Sour_Gummy text-center text-6xl font-semibold">KAOSHOP</h1>
          <h2 className="text-center text-4xl font-bold mt-2">บริการรับเติมเกม</h2>
          <FadeUpWhenVisible>
            <div className="flex justify-center items-center mt-2">
              <Swiperimg />
            </div>
          </FadeUpWhenVisible>
          <FadeUpWhenVisible>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 space-x-0 md:space-y-0 md:space-x-4 mt-10">
              {/* ปุ่มหลัก */}
              <Link href="/list">
                <Button
                  size="lg"
                  className="bg-black dark:bg-white text-white dark:text-black rounded-xl px-8 py-4 text-lg shadow-md transition transform hover:scale-[1.02]"
                >
                  รายการเกม
                </Button>
              </Link>

              {/* ปุ่มรอง */}
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl px-8 py-4 text-lg border-gray-300 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition transform hover:scale-[1.02]"
                >
                  เติมเลยที่
                </Button>
              </Link>
            </div>
          </FadeUpWhenVisible>
        </div>
      </div>
      {/* credit section */}
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <FadeUpWhenVisible>
          <h2 className="text-center text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            เครดิตร้าน
          </h2>
        </FadeUpWhenVisible>

        <div className="w-[90%] max-w-[500px] h-auto bg-white p-2 rounded-xl shadow-md">
          <FadeUpWhenVisible>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaoshopgame%2Fposts%2Fpfbid025KmJk2nGEBXxwR8mos8wj2f4x9ojpJLwM4EXbPQTS9CeZKkHpsfUeWdpwactztfEl&show_text=true&width=500"
              width="500"
              height="470"
              style={{ border: "none", overflow: "hidden" }}
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full  rounded-xl"
            />
          </FadeUpWhenVisible>
        </div>

      </div>
    </main>
  );
}
