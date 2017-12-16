// React imports
import PropTypes from "prop-types";
import React, { Component } from "react";

// View imports
import FeedItem from "View/FeedItem/FeedItem";

class Feed extends Component {
  componentWillMount() {
    this.props.feedActions.fetchFeedItems();
  }

  render() {
    return (
      <div>
        {this.props.feedItems.length
          ? this.props.feedItems.map((e, i) =>
              <FeedItem text={e.text} score={[e.scoreX, e.scoreY]} key={i} />
            )
          : <span>..loading feed</span>}
      </div>
    );
  }
}

Feed.propTypes = {
  feedItems: PropTypes.array
};

export default Feed;
