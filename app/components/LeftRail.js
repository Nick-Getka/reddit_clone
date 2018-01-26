import React from 'react';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import PostButton from './PostButton';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {connect} from 'react-redux';
import * as allActions from '../actions';
import {bindActionCreators} from 'redux';
import {cyan500} from 'material-ui/styles/colors';


class LeftRail extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.displayPosts = this.displayPosts.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props){
      this.setState({
        ...nextProps
      })
    }
  }

  handleTextChange(e) {
    if(e.target.value==="r"||e.target.value==="r/"||e.target.value===""){
      this.props.setSubreddit("r/")
    }
    else{
      this.props.setSubreddit(e.target.value)
      this.props.fetchPostsIfNeeded(e.target.value.substring(2))
      this.props.setActivePost(null)
    }
  }

  displayPosts(){
    if(this.props.posts.data){
      return (
        this.props.posts.data.children.map(post => <PostButton key={post.data.id} post={post.data}/>)
      )
    }
  }

  render(){
    const {open, toggleDrawer, selectedSub, isFetching, posts} = this.props
    const error = (!posts && selectedSub !== "r/") ? "Invalid Subreddit" : ""

    return(
      <Drawer
        docked={false}
        width={250}
        open={open}
        onRequestChange={() => toggleDrawer(!open)}
      >
        <Toolbar className="top-bar"
          style={{
            backgroundColor: cyan500
          }}
        >
          <ToolbarTitle className="top-bar-text" text="Simply Reddit" />
        </Toolbar>

        <TextField
          value={selectedSub}
          errorText={error}
          className="subreddit-field"
          id="so-no-warning"
          onChange={this.handleTextChange}
        />

        {isFetching && posts && <h2>Loading...</h2>}
        {!isFetching && posts !== null && this.displayPosts()}
      </Drawer>
    );
  }
};

function mapStateToProps(state){
  return {
      isFetching: state.fetchReducer.isFetching,
      open: state.drawerReducer.open,
      selectedSub: state.subredditReducer.selectedSub,
      posts: state.fetchReducer.activePosts
  };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({...allActions}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LeftRail);
