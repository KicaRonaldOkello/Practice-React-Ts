import * as React from 'react';
import renderHTML from "react-render-html";
import { Articles } from '../../interfaces/Articles.interface';
import bodyLimit from '../../utils/helpers';
import './DisplayArticles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

interface IDisplayArticlesProps {
    articles: Articles
}

const DisplayArticles: React.FunctionComponent<IDisplayArticlesProps> = ({ articles }) => {
    const q = articles.articles.results.map((article) => {
       return  (
           <div key={article.id} className="card-body">
               <div className="card-image">
                   <img src="https://www.incimages.com/uploaded_files/image/970x450/getty_549933903_2000133320009280405_105293.jpg" alt="trial"/>
                   <div className="card-image-overlay">
                       <span className="card-image-overlay-icon">
                            <FontAwesomeIcon
                            icon={faHeart}
                            color="white"
                            size="3x"
                            title="Favorite this article" />
                       </span>
                   </div>
               </div>
               <span className="card-text">
               <h2 className="card-title">{article.title}</h2>
               <h4 className="card-sub-title">{article.description}</h4>
               <p className="card-sample-text">{renderHTML(bodyLimit(article.body, 100))}</p>
               </span>
               <NavLink
                to={`/article/${article.slug}`}
                className="card-button-read"
               >
                    Read more &#8594;
               </NavLink>
           </div>
       )
    })
    return (
      <div className="card-display">
          {q}
      </div>
  );
};

export default DisplayArticles;
