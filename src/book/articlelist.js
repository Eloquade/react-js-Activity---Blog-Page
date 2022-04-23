
import React from 'react';
import Articleslist from '../components/articleslist';
import ArticleContent from './articlecontent';
import {Link} from 'react-router-dom';


const ArticleList = () => (
  <React.Fragment>
    <Articleslist articles={ArticleContent} />
  </React.Fragment>
)

export default ArticleList;