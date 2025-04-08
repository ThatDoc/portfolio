const Divider = ({text}) => {
    return (
        <div className="horizontal-line"><hr/>{`${text ? `⟨ ${text} ⟩` : "< >"}`}<hr/></div>
    );
}

export default Divider;