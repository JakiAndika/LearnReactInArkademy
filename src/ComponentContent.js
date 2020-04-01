import React, { Component } from 'react';

class ComponentContent extends Component {
    state = {
        kelas: ' XI',
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                kelas: ' XI RPL 1'
            })
        },3000)
    }
    render() {
        return (
            <div>
                Kelas :
                {this.state.kelas}
            </div>
        )
    }
}

export default ComponentContent;