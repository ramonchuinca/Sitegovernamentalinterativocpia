import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SocialFeed() {
  const [rotation, setRotation] = useState(0);

 const videos = [
  "https://www.youtube.com/embed/bUfdhAOg-LE",
  "https://www.youtube.com/embed/pWGVEbBiNWU",
  "https://www.youtube.com/embed/pCbmNTRv6Hw",
  "https://www.youtube.com/embed/yiCMOjHIkng",
  "https://www.youtube.com/embed/ZbuoyRNtuME",
  "https://www.youtube.com/embed/TxWwXIye_8M",
  "https://www.youtube.com/embed/TH76IXVsAHk",
  "https://www.youtube.com/embed/T-UeVhqdPrE",
  "https://www.youtube.com/embed/6mL2stM9vgM",
  "https://www.youtube.com/embed/pCbmNTRv6Hw",
];

  const angle = 360 / videos.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((prev) => prev - angle);
    }, 3000);

    return () => clearInterval(timer);
  }, [angle]);

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white">
  <h2 className="text-5xl font-bold">
    Vídeos em Destaque
  </h2>

  <p className="text-gray-400 mt-3">
    Acompanhe as ações do governo
  </p>
</div>

<div className="flex justify-center mt-32">
          <div
            className="relative"
            style={{
              width: "220px",
              height: "260px",
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateY(${rotation}deg)`,
              transition: "transform .7s",
            }}
          >
            {videos.map((video, index) => (
              <span
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transform: `rotateY(${
                    (index + 1) * angle
                  }deg) translateZ(500px)`,
                }}
              >
                <iframe
                  src={video}
                  title={`video-${index}`}
                  className="w-full h-full rounded-2xl shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full mt-16">
          <button
            onClick={() => setRotation((prev) => prev + angle)}
            className="absolute left-[20%] p-4 rounded-lg bg-violet-600 text-white hover:brightness-125"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => setRotation((prev) => prev - angle)}
            className="absolute right-[20%] p-4 rounded-lg bg-violet-600 text-white hover:brightness-125"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}