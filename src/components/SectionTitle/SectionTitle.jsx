
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto w-3/12 my-4">
            <p className="text-cyan-500 text-xl pb-3 uppercase">{subHeading}</p>
            <hr />
            <h3 className="text-cyan-600 text-2xl border-y-4  py-3 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;