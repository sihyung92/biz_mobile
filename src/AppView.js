import React from 'react';
import Navigator from './navigation/Navigator';
import { connect } from 'react-redux';
import * as memberActions from './store/modules/member';

class AppView extends React.Component{
  render(){
    const { isLogin } = this.props;

    return(
      <Navigator
        isLogin = { isLogin }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.member.isLogin
});

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AppView);