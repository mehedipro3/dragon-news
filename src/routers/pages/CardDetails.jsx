import { Link, useLoaderData } from "react-router-dom";
import Header from "../../components/Header";
import RightNavbar from "../../components/layout-component/RightNavbar";
import { FaArrowLeft } from "react-icons/fa";
const CardDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div className="w-11/12 mx-auto grid grid-cols-12 gap-4">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt={news?.title}
                className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-3xl">{news.title}</h2>
              <p>{news.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] text-white p-2"> <FaArrowLeft /> All news in this category</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNavbar></RightNavbar>
        </section>
      </div>

    </div>
  );
};

export default CardDetails;