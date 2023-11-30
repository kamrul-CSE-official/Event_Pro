import { Link, useLoaderData } from "react-router-dom";
import { getDataInLocalStore } from "../../LoocalStorage/LocalStorage";

export default function YourEvents() {
  const yourData = getDataInLocalStore("selectedEvents");
  const data = useLoaderData();

  const commonData = data.filter((dataItem) =>
    yourData.some((yourItem) => yourItem.id === dataItem.id)
  );

  return (
    <div>
      <h3 className="text-2xl font-bold mt-4 text-center">You Booked</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:my-8">
        {commonData.map((data) => (
          <div key={data.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={data.coverImg} alt="coverImg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {data.title}
                <div className="badge badge-secondary">{}</div>
              </h2>
              <p>{data.details}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{data.category}</div>
                <div className="badge badge-outline">{data.date}</div>
              </div>
            </div>
            <Link className="btn btn-outline" to={`/event/${data.id}`}>
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
