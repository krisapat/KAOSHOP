import FadeUpWhenVisible from "@/components/animation/FadeUpWhenVisible";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, MessageCircle } from "lucide-react";
import Link from "next/link";

const channels = [
  {
    title: "เติมผ่าน Facebook",
    links: "https://www.facebook.com/kaoshopgame",
    icon: <Facebook className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "เติมผ่าน LINE",
    links: "https://line.me/R/ti/p/@754oymxu",
    icon: <MessageCircle className="w-10 h-10 text-green-500" />,
  },
];

const page = () => {
  return (
    <div className="relative min-h-screen p-6 pt-25">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/1 via-white/70 to-transparent dark:from-white/10 dark:via-[#0c0c0c]/50 dark:to-transparent" />
      </div>
      <div className="relative z-10">
        <FadeUpWhenVisible>
          <h2 className="text-4xl font-semibold mb-6">ช่องทางการเติม</h2>
        </FadeUpWhenVisible>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {channels.map((channel, index) => (
            <FadeUpWhenVisible key={index}>
              <Card className="transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
                <CardContent className="flex items-center gap-4 p-6">
                  {channel.icon}
                  <div>
                    <h2 className="text-xl">{channel.title}</h2>
                    <Link
                      href={channel.links}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-md font-medium"
                    >
                      เติมเลย!
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </FadeUpWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
