import Image from "next/image";
import HeroImage from "../public/images/banner.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="w-full md:h-[650px] flex flex-col-reverse md:flex-row">
        <div className="my-0 mx-auto w-full md:w-[50%] xl:w-[40%] flex justify-center flex-col gap-10 h-full bg-gradient-to-bl to-indigo-950 from-indigo-900 px-10 lg:px-20 py-10 md:py-0">
          <h1 className="text-6xl text-indigo-50 font-semibold lg:leading-tight">
            Shopping and Department Store.
          </h1>
          <p className="text-xl text-indigo-50">
            Explore the largest collection of products at the lowest price
            available.
          </p>
          <button className="rounded-full px-6 py-3 bg-indigo-50 hover:bg-indigo-100 w-fit font-semibold hover:-translate-y-1 focus:-translate-y-1 transition-all duration-75 ease-in-out">
            Learn More
          </button>
        </div>
        <Image
          className="h-full object-cover w-full md:w-[50%] lg:w-[60%] max-w-full"
          src={HeroImage}
          alt="A shopping cart with a discount tag on it"
        />
      </div>
      {/* Main Container */}
      <div className="container py-10 my-0 mx-auto ">
        {/* Top Categories */}
        <h1 className="text-3xl font-bold mb-10 text-slate-900">
          Shop Our Top Categories
        </h1>
        {/* <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 cursor-pointer">
          {categoryLinks.map((category, index) => (
            <Link
              key={index}
              className="text-2xl text-indigo-950 font-bold text-center group"
              href={category.href}>
              <div className="h-[250px] w-full rounded-lg overflow-hidden mb-3">
                <Image
                  className="w-full h-full object-contain rounded-lgtransition-transform duration-150 ease-in-out group-hover:scale-110"
                  alt={category.alt}
                  src={category.image}
                />
              </div>

              <span className="border-b-indigo-950 group-hover:border-b-2">
                {category.label}
              </span>
            </Link>
          ))}
        </div> */}
      </div>
    </main>
  );
}
