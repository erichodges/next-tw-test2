
import Image from "next/image";

export default function Page3() {
  return (
    <div class="hero min-h-screen"> 
      <div class="relative hero-overlay bg-opacity-60">
        <Image
        src="https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg"
        alt="car"
        width="2400"
        height="1200"
        layout="responsive"
        priority="true"
        />
      </div>
      <h1 class=" text-5xl font-bold">
                Hello there
          </h1> 
      <div class="text-center hero-content text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">
                Hello there
          </h1> 
          <p class="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p> 
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}