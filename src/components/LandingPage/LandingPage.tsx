import * as React from 'react';
import { getArticles } from '../../actions/ArticleActions';
import { AppState } from '../../reducers';
import { Articles } from '../../interfaces/Articles.interface';
import { ThunkDispatch } from 'redux-thunk';
import { ArticlesActionTypes } from '../../types/Articles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DisplayArticles from './DisplayArticles';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


export interface LandingPageProps {
    articles: Articles;
    getArticles: () => void;
}

export interface LandingPageState {
    articles: Articles
}

export class LandingPage extends React.Component<LandingPageProps, LandingPageState> {

    readonly state  = {
        articles: {} as Articles
    };

  componentDidMount() {
    this.props.getArticles();
  }

  componentDidUpdate(prevProps: any) {

    if (prevProps.articles.articles !== this.props.articles.articles) {
        this.setState({
            articles: { ...this.props.articles }
        })
    }
  }

  public render() {
    return (
      <div>
        <div className="heading">
          <p className="title">The Very Best Articles</p>
          <p className="sub-title">Challenge yourself to be knowledgeable!!!!!</p>
        </div>
          {this.state.articles.articles ?
        (<DisplayArticles articles={this.state.articles} />) :
        (
        <div className="landing-page-spinner">
          <FontAwesomeIcon
          icon={faSpinner}
          size="5x"
          spin
          />
        </div>
        )
          }
      </div>
    );
  }
}
  const mapStateToProps = (state: AppState) => ({
    articles: state.articles
  });

  const mapDispatchToProps =
  (dispatch: ThunkDispatch<any, any, ArticlesActionTypes>) => ({
    getArticles: bindActionCreators(getArticles, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
