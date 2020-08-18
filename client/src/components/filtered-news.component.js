// ** filtered-news.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class FilteredNews extends Component {

    constructor(props) {
        super(props)

        this.onChangeFilterParam = this.onChangeFilterParam.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            filterParam: ''
        }
    }

    onChangeFilterParam(e) {
        this.setState({ filterParam: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const filterObject = {
            filterParam: this.state.filterParam,
        };

        axios.post('/api/getFilteredNews', filterObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ filterParam: ''})
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Add Filter</label>
                        <input type="text" value={this.state.filterParam} onChange={this.onChangeFilterParam} />
                    </div>
                    <div>
                        <input type="submit" value="GetFilteredNews"/>
                    </div>
                </form>
            </div>
        )
    }
}