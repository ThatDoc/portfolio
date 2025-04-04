const Divider = ({text}) => {
    return (
        <div className="horizontal-line"><hr/><a>{`<${text ? ` ${text} ` : " "}>`}</a><hr/></div>
    );
}

export default Divider;