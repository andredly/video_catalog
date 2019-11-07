import React from "react";

class CreateElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        };
    }
    render() {
        return React.createElement("div", {className: "alert alert-primary"}, `${this.state.title} from React.createElement`);
    }
}

export default CreateElement;
