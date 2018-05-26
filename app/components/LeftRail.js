import React from 'react';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import { bindActionCreators } from "redux";
import PostButton from './PostButton';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {connect} from 'react-redux';
import {fetchPosts} from '../modules/fetchPosts';
import {cyan500} from 'material-ui/styles/colors';


class LeftRail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddit:'',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange({target}) {
    this.setState({
      subreddit: target.value,
    }, () => this.props.fetchPosts(this.state.subreddit));
  }

  render(){
    const {open, isValid, posts, onLeftRailClick} = this.props;
    const error = (this.state.subreddit && !isValid) ? "Invalid Subreddit" : "";

    return(
      <Drawer
        docked={false}
        width={350}
        open={open}
        onRequestChange={() => {onLeftRailClick()}}
      >
        <Toolbar className="top-bar"
                 style={{
                   backgroundColor: cyan500
                 }}
        >
          <ToolbarTitle className="top-bar-text" text="Simply Reddit" />
        </Toolbar>

        <TextField
          value={this.state.subreddit}
          errorText={error}
          className="subreddit-field"
          id="so-no-warning"
          onChange={this.handleTextChange}
        />

        {posts && posts.map(post => <PostButton key={post.id}
                                                post={post}
                                                onLeftRailClick={onLeftRailClick}/>)}
      </Drawer>
    );
  }
};

const mapStateToProps = (state) => {
  const {posts, isValid} = state.fetchReducer;

  return {
    isValid,
    posts
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPosts,

  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(LeftRail);
