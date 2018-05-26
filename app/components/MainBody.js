import React from 'react';
import {connect} from 'react-redux';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Button from 'material-ui/core/Button';

const Welcome = () =>{
  return(
    <Card>
      <CardTitle
        title="Welcome to the Simply Reddit Viewer"
        subtitle={"Click the Options Button in the top left and enter a subreddit \
                   to view that subreddit's top posts"}
      />
    </Card>
  );
};

const DisplayActivePost = (props) =>{
  const {title, subreddit, author, url, selftext} = {...props.post};
  const finalURL = url === null ? "" : url;
  const finalText = selftext === null ? "" : selftext;
  return(
    <Card>
      <a href = {url}
         target="_blank"
         className="post-title">
        <CardTitle
          title={title}
          actAsExpander={true}
          showExpandableButton={true}
          subtitle={"u/"+author+" - r/"+subreddit }
        />
        <img src={finalURL} alt="" className="post-content"/>
      </a>
      <CardText className="post-content">
        {finalText}
      </CardText>
      <Button/>
    </Card>
  );
};


class MainBody extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    const {activePost} = this.props;

    if(!activePost){
      return <Welcome />
    }
    else{
      return <DisplayActivePost post={activePost} />
    }
  }
}

function mapStateToProps(state){
  return {
    activePost: state.setActivePostReducer.activePost
  }
}

export default connect(mapStateToProps, null)(MainBody);