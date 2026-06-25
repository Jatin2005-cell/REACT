function HeroSection({
  title,
  description,
  image,
  buttonText,
  reverse = false,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-16`}
      >

        <div className="flex-1">

          <img
            src={image}
            alt="Hero"
            className="rounded-xl"
          />

        </div>

        <div className="flex-1">

          <h1 className="text-5xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-6 text-gray-600 leading-8">
            {description}
          </p>

          <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md">

            {buttonText}

          </button>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;