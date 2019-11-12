import * as React from 'react';
import { Article } from '../../interfaces/Articles.interface';
import renderHTML from "react-render-html";
import "./DisplaySingleArticle.css";

interface IDisplaySingleArticleProps {
    article: Article
}

const DisplaySingleArticle: React.FunctionComponent<IDisplaySingleArticleProps> = ({ article }) => {
  return (
      <div>
          <div className="article">
            <h1>{article.title}</h1>
            <p>{renderHTML(article.body)}</p>
          </div>
      </div>
  );
};

export default DisplaySingleArticle;
