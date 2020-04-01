import React, { Component } from 'react';

class ComponentName extends Component {
    state = {
        nama: ' Jaki'
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                nama: ' Jaki Andika'
            })
        }, 2000);
    }
    render() {
        return (
            <div>
                Nama :
                {this.state.nama}
            </div>
        )
    }
}

export default ComponentName;