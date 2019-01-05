import React, { Component } from "react";
import style from './styles.module.css';

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
                    <td className = {style.icoName}>
                        <a href={url}>
                            {name}
                        </a>
                    </td>
                    <td className = {style.icoCategory}>{category}</td>
                    <td className = {style.icoStatus}>{status}</td>
                    <td className = {style.icoPlatform}>{platform}</td>
                </tr>
            );
        })
       return (
            <div>
            <table className = {style.icoTable}>
                <thead>
                    <tr>
                        <th className = {style.icoName}>
                            Name
                        </th>
                        <th className = {style.icoCategory}>
                            Category
                        </th>
                        <th className = {style.icoStatus}>
                            Status
                        </th>
                        <th className = {style.icoPlatform}>
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