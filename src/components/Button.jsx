import React from "react";

class Button extends React.Component {
    render(){
        return (
            <button>
                {this.props.name}
                {this.props.function}
            </button>
        );
    }
};

export default Button;