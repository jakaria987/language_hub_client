import './InstructorItem.css'

const InstructorItem = ({ item }) => {
  const { instructorName, image } = item;
  return (
    <div className="flex md:flex-col-3">
      <div className="card w-96 bg-base-100 shadow-xl py-4">
        <figure>
          <img className="style rounded" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto font-bold">{instructorName}</h2>
        </div>
      </div>
    </div>
  );
};

export default InstructorItem;
