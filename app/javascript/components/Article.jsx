import React from "react"
import PropTypes from "prop-types"

import Timestamp from "react-timestamp"

class Article extends React.Component {
  render() {
    return (
      <React.Fragment >
        <div className="article-title">
          <a href={this.props.path}> {this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}
        </div>
        <div className="article-meta-details">
          <small> Created by: {this.props.author},
            <Timestamp relative date={this.props.created_at} precision={4} />,
            last updated: <Timestamp relative date={this.props.updated_at} preision={4} />
          </small>
        </div>
      </React.Fragment>
    );
  }

  // componentDidMount() {
  //   var self = this;
  //   this._timer = setInterval(function() { self.forceUpdate() }, 5000);
  // }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  createed_at: PropTypes.string,
  updated_at: PropTypes.string
};
export default Article