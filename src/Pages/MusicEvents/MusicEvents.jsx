import { Link, useLoaderData } from "react-router-dom";

export default function MusicEvents() {
  const data = useLoaderData();
  const musicData = data.filter((item) => item.category === "Music");
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center my-5 border-b-4 border-primary">
          Music Events
        </h2>
        <div className="grid grid-cols-1 gap-2">
          {musicData.map((item) => (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              key={item.id}
              className="card bg-base-100 shadow-xl"
            >
              <figure>
                <img src={item.coverImg} alt="cover" />
              </figure>
              <div className="p-2 block">
                <h2 className="text-base font-bold">{item.title}</h2>
                <p className="text-md hyphens-auto">
                  {item.details.slice(0, 100)}{" "}
                  <Link
                    className="text-blue-600 font-bold"
                    to={`/event/${item.id}`}
                  >
                    Read more...
                  </Link>
                </p>
                <div className="avatar placeholder flex items-center justify-center gap-1 my-2">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">
                      <img src={item.speakerImg} alt="speaker" />
                    </span>
                  </div>
                  <p>{item.speaker}</p>
                </div>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="border-2 border-black rounded-lg text-xs p-1">
                    {item.category}
                  </div>
                  <div className="border-2 border-black rounded-lg text-xs p-1">
                    {item.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
