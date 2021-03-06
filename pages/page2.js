// Daisy UI full page hero with background image from cloudinary and hero text in the middle of the page

import Image from "next/image";

export default function Page2() {
  return (
    <div class="hero min-h-screen">
      
      <div class="hero-overlay bg-opacity-100">
        <Image
        src="https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg"
        alt="car"
        width="2400"
        height="1200"
        layout="responsive"
        priority="true"
        />
      </div> 
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