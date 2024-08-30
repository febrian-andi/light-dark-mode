import CardMedia from "../components/Card/CardMedia";
import dataMedia from "../constants/dataMedia";

function Media() {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold">Media</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {dataMedia.map((data) => (
          <CardMedia
            image={data.image}
            title={data.title}
            detail={data.detail}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Media;
