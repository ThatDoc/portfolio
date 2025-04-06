const Divider = ({text}) => {
    return (
        <div className="horizontal-line"><hr/><p>{`<${text ? ` ${text} ` : " "}>`}</p><hr/></div>
    );
}

export default Divider;