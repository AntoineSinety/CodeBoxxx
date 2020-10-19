import React, { Component } from "react";
import MainMenu from '../components/MainMenu';

import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";

import 'react-markdown-editor-lite/lib/index.css';


class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // ...INITIAL_STATE,
            title: "",
            articleToSave: ""
        };
    }
    
    componentDidMount() {
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log('en cours ...')
        // handleArticle(inputs.title, token)
    }
    handleChange = (e) =>{
        console.log("handleChange")
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }
    handleEditorChange = ({ html, text }) =>{
        this.setState({ articleToSave: text });
        // console.log("handleEditorChange", html, text);
        console.log('yepp', this.state.articleToSave);
    }
    
    render() {
        
        var mdParser = new MarkdownIt(/* Markdown-it options */);
        return (
            <>
            <MainMenu/>
            <div className="container-site">
                <div className="add-article">
                    <form onSubmit={this.handleSubmit}>
                        Article
                        <br></br>
                        <label for="title">Titre :</label> <br></br>
                        <input type="text" onChange={this.handleChange} name="title" placeholder='title' value={this.state.title} /> <br></br>
                        <label for="code">Code :</label> <br></br>
                        {/* <textarea onChange={handleChange} id="code" name="codearea"></textarea> */}
                        <MdEditor
                            style={{ height: "500px" }}
                            value={this.state.articleToSave}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                        />
                        <button className="valid-button">Valider</button>
                        <button className="back-button" onClick={this.handleBack}>retour</button>
                    </form>
                </div>
            </div>
            </>
            );
        }
    }
    
    
    export default AddArticle;