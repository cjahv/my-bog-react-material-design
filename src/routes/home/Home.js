/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.less';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.item = props.item;
        this.state = {};
    }

    openBox(e) {
        console.log(this, e);
        e.stopPropagation();
        this.setState({offsetY: e.pageY, offsetX: e.pageX});
        setTimeout(()=> this.setState({offsetY: 0, offsetX: 0}), 2000);
    }

    setOffset() {
        var style = {};
        style.top = (this.state.offsetY || 0) - 500;
        style.left = (this.state.offsetY || 0) - 500;

        style.width = style.height = style.top>-500 || style.left>-500 ? 1000 : 0;
        return style;
    }

    render() {
        return <article className={s.article} onClick={this.openBox.bind(this)}>
            <h3>{this.item.title}</h3>
            <p dangerouslySetInnerHTML={{__html: this.item.content}}/>
        </article>
    }
}

const articles = [
    {
        title: "测试文章1",
        content: "这是第一篇文章<br>这是第一篇文章<br>这是第一篇文章<br>这是第一篇文章"
    },
    {
        title: "测试文章1",
        content: "这是第一篇文章"
    },
    {
        title: "测试文章1",
        content: "这是第一篇文章"
    },
    {
        title: "测试文章1",
        content: "这是第一篇文章"
    },
    {
        title: "测试文章1",
        content: "这是第一篇文章"
    }
];

const Home = React.createClass({
    render(){
        return <Layout>
            <div className={s.container}>
                <div className={s.articles}>
                    <div className={s.articlesBox}>
                        {articles.map((item, index) =><Article item={item} key={index}/>)}
                    </div>
                </div>
                <div className={s.tags}>
                    <article className={s.tagArticle}>
                        <h3 className={s.tagTitle}>#TAG</h3>
                        <span className={s.tagAction} data-action="action.about()">关于</span>
                    </article>
                </div>
            </div>
        </Layout>
    }
});

export default withStyles(s)(Home);
