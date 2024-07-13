import { testimonials } from "../constants";

function Testimonials() {
  return (
    <div className="mt-10 tracking-wide">
      <h2 className="my-10 text-center text-3xl sm:text-5xl lg:my-20 lg:text-6xl">
        What People Are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonials, index) => (
          <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
            <div className="text-md bg-neutral rounded-md border border-neutral-800 p-6 font-thin">
              <p>{testimonials.text}</p>
              <div className="mt-8 flex items-start">
                <img
                  className="mr-6 h-12 w-12 rounded-full border border-neutral-300"
                  src={testimonials.image}
                  alt={testimonials.user}
                />
                <div>
                  <h6>{testimonials.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonials.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
