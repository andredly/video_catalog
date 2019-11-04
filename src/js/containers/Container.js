import React, {Component} from "react";
import ReactComponent from "../components/Component";
import CreateElement from "../components/CreateElement";
import PureComponent from "../components/PureComponent";
import FunctionalComponent from "../components/FunctionalComponent";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Hello world"
        };
    }
    render() {
        const { title } = this.state;
        return (
            <div className="container">
                <ReactComponent title = {title}/>
                <CreateElement title = {title}/>
                <PureComponent title = {title}/>
                <FunctionalComponent title = {title}/>
            </div>
        )
    }
}

export default Container;
