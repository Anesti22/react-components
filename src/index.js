import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";
import Segment from "./Segment";
import Segments from "./Segments";

const App = () => {
    return (
        <div className="ui container comments" style={{marginTop: "30px"}}>
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                </div>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Nesti"
                    date="Today: at 9:10PM"
                    content="Nice blog post #1"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Maria"
                    date="Today: at 11:10PM"
                    content="Nice blog post #2"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Gideon"
                    date="Today: at 11:11PM"
                    content="Nice blog post #3"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <Message
                header="Changes in Service"
                content="We updated our privacy policy here to better service our
            customers. We recommend reviewing the changes."
            />

            <Segments>
                <Segment
                    pdfName="No documents are listed for this customer."
                    btnButton="Add Document"
                />
            </Segments>

            <Segments>
                <h5>Hey how are you?</h5>
                <p>
                    A group of segments can be formatted to appear together. A
                    group of segments can be formatted to appear together. A
                    group of segments can be formatted to appear together. A
                    group of segments can be formatted to appear together.
                </p>
            </Segments>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
