const ClassItem = ({ item }) => {
  const { image, name } = item;
  return (
    <div className="flex md:flex-col-3">
      <div className="card w-96 bg-base-100 shadow-xl py-4">
        <figure>
          <img
            className="w-[250px] rounded"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto font-bold">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
