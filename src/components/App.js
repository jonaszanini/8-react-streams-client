import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "../components/Streams/StreamCreate";
import StreamDelete from "../components/Streams/StreamDelete";
import StreamEdit from "../components/Streams/StreamEdit";
import StreamShow from "../components/Streams/StreamShow";
import StreamList from "../components/Streams/StreamList";
import Header from "../components/Header";

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/delete" component={StreamDelete} />
                    <Route path="/streams/edit" component={StreamEdit} />
                    <Route path="/streams/show" component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};
export default App;
