import * as React from 'react';
import { Article } from '../../interfaces/Articles.interface';
import { AppState } from '../../reducers';
import { connect } from 'react-redux';
import { getSingleArticle } from '../../actions/ArticleActions';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import DisplaySingleArticle from './DisplaySingleArticle';
import './SingleArticle.css';


interface SingArticleRouterProps {
    slug: string;
}
interface OwnProps extends  RouteComponentProps<SingArticleRouterProps> {
}
export interface ISingleArticleProps {
    slug: string;
    article: Article;
    getSingleArticle: (slug: string) => void;
}

export interface ISingleArticleState {
    article: Article;
}


export class SingleArticle extends React.Component<ISingleArticleProps, ISingleArticleState> {
  
    readonly state  = {
        article: {} as Article
    };

    componentDidMount() {
        const { slug, getSingleArticle } = this.props;
        getSingleArticle(slug);
    }

    componentDidUpdate(prevProps: any) {

        if (prevProps.article !== this.props.article) {
            this.setState({
                article: { ...this.props.article }
            })
        }
      }
  public render() {
    return (
      <div>
        {this.state.article.id ? 
        (<DisplaySingleArticle
        article={this.state.article}
        />) :
        (
        <div className="single-article-page-spinner">
        <FontAwesomeIcon
        icon={faSpinner}
        size="5x"
        spin
        />
      </div>
      )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
    article: state.article,
    slug: ownProps.match.params.slug
});

export default withRouter(connect(mapStateToProps, { getSingleArticle })(SingleArticle));
