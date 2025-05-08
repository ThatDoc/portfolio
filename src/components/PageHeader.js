import Divider from "./Divider";

const PageHeader = ({title}) => {
    return (
        <div className="Page-header">
            <Divider/>
            <div>
                <h2>{title}</h2>
            </div>
            <Divider/>
        </div>
    )
};

export default PageHeader;