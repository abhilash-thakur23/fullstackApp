import React, { Component } from 'react';
import axios from 'axios';

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
                    <table>
                        <thead >
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