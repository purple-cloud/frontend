import React from 'react';

class HelloWorld extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           post: "Hello World!"
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
            </tr>
        );
    }
}

export default HelloWorld;