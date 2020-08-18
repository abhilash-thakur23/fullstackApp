import React, { Component } from 'react';
import axios from 'axios';
import NewsData from './news-data';

export default class LatestNews extends Component {

    constructor(props) {
        super(props);
        this.state = { newsCollection: [] };
    }

    componentDidMount() {
        axios.get('/api/getLatestNews')
            .then(res => {
                this.setState({ newsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


     renderNews = () => {
        return (
            this.state.newsCollection.data.articles.map((article) => 
         
          <li>{article}</li>
    
          )    );
      };

    render() {
        return (
            <div >
                <div >
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderNews()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}