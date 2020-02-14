import React from "react";

const Segment = props => {
    return (
        <div>
            <div className="ui placeholder segment">
                <div className="ui icon header">
                    <i aria-hidden="true" className="pdf file outline icon"></i>
                    {props.pdfName}
                </div>
                <button className="ui primary button">{props.btnButton}</button>
            </div>
        </div>
    );
};

export default Segment;
