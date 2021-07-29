import Image from "next/image";

export default function Home() {
  return (
    <div className="relative content-center w-screen">
    <Image
      src="https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg"
      alt="car"
      width="2400"
      height="1200"
      layout="responsive"
      priority="true"
    />
    <h1
      className="absolute transform -translate-x-1/2 -translate-y-20 md:-translate-y-1/3 sm:-translate-y-1/3 xxs:-translate-y-1/2 xl:text-9xl lg:text-8xl base:text-7xl sm:text-6xl xs:text-5xl xxs:text-4xl top-1/2 left-1/2"
    >
      Test Text
    </h1>
  </div>
  )
}
