import React from 'react';
import * as allActions from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card, CardTitle, CardText} from 'material-ui/Card';

const Welcome = () =>{
  return(
    <Card>
      <CardTitle
        title="Welcome to the Simply Reddit Viewer"
        subtitle={"Click the Options Button in the top left and enter a subreddit \
                   to that subreddit's top posts"}
      />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  );
};
const Error = () =>{
  return(
    <Card>
      <CardTitle
        title="An Error has occured"
        subtitle={"The subreddit you typed in d"}
      />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  );
};
const DisplayActivePost = (props) =>{
  const {title, subreddit, author, url, selftext} = {...props.post}
  const finalURL = url === null ? "" : url
  const finalText = selftext === null ? "" : selftext
  return(
    <Card>
      <CardTitle
        title={title}
        subtitle={"u/"+author+" - r/"+subreddit }
      />
      <img src={finalURL} alt="" className="post-img"/>
      <CardText>
        {finalText}
      </CardText>
    </Card>
  );
};


class MainBody extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props){
      this.setState({
        ...nextProps
      })
    }
  }

  render(){
    const {activePost} = this.props
    if(activePost===null || activePost === undefined){
      return <Welcome />
    }
    else{
      return <DisplayActivePost post={activePost} />
    }
  }
};

function mapStateToProps(state){
  return {
    activePost: state.activePostReducer.activePost
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({...allActions}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainBody);
