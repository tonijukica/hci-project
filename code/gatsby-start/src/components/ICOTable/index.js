import React, { Component } from "react";

class ICOTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch('https://api.trackico.io/v1/icos/all/')
          .then(response => response.json())
          .then(data => this.setState({ data }));
    }

    render() {
        const { data } = this.state;
       if(data) {
        const ICOList = data.results.map(ico => {
            const id = ico.id;
            const name = ico.title;
            const status = ico.status;
            const url = ico.profile_url;
            const category = ico.category;
            const platform = ico.platform;

            return (
                <tr key = { id }>
                    <td>
                        <a href={url}>
                            {name}
                        </a>
                    </td>
                    <td>{category}</td>
                    <td>{status}</td>
                    <td>{platform}</td>
                </tr>
            );
        })
       return (
            <div>
            <table>
                <thead>
                    <tr>
                        <th >
                            Name
                        </th>
                        <th >
                            Category
                        </th>
                        <th >
                            Status
                        </th>
                        <th >
                            Platform
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ICOList}
                </tbody>
            </table>
        </div>  
        );
       }
        else {
        return (
            <p></p>
        )
        }
    }
}


export default ICOTable;