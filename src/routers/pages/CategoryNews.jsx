import { useLoaderData } from "react-router-dom";


const CategoryNews = () => {
  const {data} = useLoaderData();
  return (
    <div>
      <h2>{data.length} of category</h2>
    </div>
  );
};

export default CategoryNews;