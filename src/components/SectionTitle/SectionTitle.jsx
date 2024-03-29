const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="mx-auto text-center py-4 my-4 md:w-4/12">
            <p className="text-yellow-500 italic mb-3">---{subHeading}---</p>
            <h3 className="uppercase text-4xl border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;