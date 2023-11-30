import { Link, useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default function Category() {
  const data = useLoaderData();
  const techData = data.filter((item) => item.category === "Tech");
  const musicData = data.filter((item) => item.category === "Music");
  const healthData = data.filter((item) => item.category === "Health");
  const markethingData = data.filter((item) => item.category === "Marketing");

  return (
    <div>
      <h3 className="text-xl font-bold text-center md:mt-4">
        Ther are lots of category of events
      </h3>
      {/* health event */}
      <div className="my-4">
        <h4 className="font-bold">Health Events</h4>
        <Marquee speed={150} pauseOnHover={true}>
          {healthData.map((item) => (
            <Link
              to={`/event/${item.id}`}
              key={item.id}
              className="card w-auto bg-base-100 shadow-xl ml-4"
            >
              <figure>
                <img src={item.coverImg} alt="coverImg" width={180} />
              </figure>
              <h3 className="font-bold">{item.title}</h3>
            </Link>
          ))}
        </Marquee>
      </div>
      {/* marketing event */}
      <div className="my-4">
        <h4 className="font-bold">Marketing Events</h4>
        <Marquee speed={150} pauseOnHover={true}>
          {markethingData.map((item) => (
            <Link
              to={`/event/${item.id}`}
              key={item.id}
              className="card w-auto bg-base-100 shadow-xl ml-4"
            >
              <figure>
                <img src={item.coverImg} alt="coverImg" width={180} />
              </figure>
              <h3 className="font-bold">{item.title}</h3>
            </Link>
          ))}
        </Marquee>
      </div>
      {/* music event  */}
      <div className="my-4">
        <h4 className="font-bold">Music Events</h4>
        <Marquee speed={150} pauseOnHover={true}>
          {musicData.map((item) => (
            <Link
              to={`/event/${item.id}`}
              key={item.id}
              className="card w-auto bg-base-100 shadow-xl ml-4"
            >
              <figure>
                <img src={item.coverImg} alt="coverImg" width={180} />
              </figure>
              <h3 className="font-bold">{item.title}</h3>
            </Link>
          ))}
        </Marquee>
      </div>
      {/* tech events */}
      <div className="my-4">
        <h4 className="font-bold">Tech Events</h4>
        <Marquee speed={150} pauseOnHover={true}>
          {techData.map((item) => (
            <Link
              to={`/event/${item.id}`}
              key={item.id}
              className="card w-auto bg-base-100 shadow-xl ml-4"
            >
              <figure>
                <img src={item.coverImg} alt="coverImg" width={180} />
              </figure>
              <h3 className="font-bold">{item.title}</h3>
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
