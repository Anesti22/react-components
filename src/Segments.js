import React from "react";
const Segments = props => {
    return (
        <div>
            <div className="ui placeholder segment">{props.children}</div>
        </div>
    );
};

export default Segments;
