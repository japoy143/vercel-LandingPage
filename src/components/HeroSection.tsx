import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  return (
    <div className="mt-6 flex flex-col items-center lg:mt-20">
      <h1 className="text-center text-4xl tracking-wide sm:text-6xl lg:text-7xl">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 max-w-4xl text-center text-lg text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className="my-10 flex justify-center">
        <a
          href="#"
          className="mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2"
        >
          Start for Free
        </a>
        <a href="#" className="mx-3 rounded-md border px-3 py-2">
          Documentation
        </a>
      </div>
      <div className="mt-10 flex justify-center">
        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 w-1/2 rounded-md border border-orange-700 shadow-orange-400"
        >
          <source src={video1} type="video/mp4" />
          Your Browser Doesn't Support video
        </video>

        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 w-1/2 rounded-lg border border-orange-700"
        >
          <source src={video2} type="video/mp4" />
          Your Browser Doesn't Support video
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
