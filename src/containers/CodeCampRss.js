import React, { Component } from "react";

import * as Parser from "rss-parser";

import MainMenu from '../components/MainMenu';



let parser = new Parser({
    customFields: {
        item: [["media:content", "media", { keepArray: true }]],
    },
});


class CodeCampRss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: [] 
        };
   }

    componentDidMount() {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

        return parser.parseURL(
            CORS_PROXY + "https://www.freecodecamp.org/news/rss/"
            )
            .then(data => {
                console.log('data', data);
               this.setState({articles: data.items});
            });
    }

   render() {
       return (
        <>
            <MainMenu/>
                <div className="container-site">
                <h1>RSS Feed</h1>
                {/* {this.state.feed.items} */}
                <div className="wrapper-flux">
                    {this.state.articles.map((item, i) => (
                        <div className="one-flux" key={i}>
                            <img className="img-flux" src={item.media[0].$.url} alt="demo"/>
                            <h3>{item.title}</h3>
                            <a className="link-flux" href={item.link}>Lire l'article</a>
                        </div>
                    ))}
                </div>
                    {/* {this.state.feed.items[1].title} */}
            </div>
        </>
       );
   }
}


export default CodeCampRss;