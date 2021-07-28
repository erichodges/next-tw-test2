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
      className="absolute transform -translate-x-1/2 -translate-y-20 text-8xl top-1/2 left-1/2"

    >
      Test Text
    </h1>
  </div>
  )
}
