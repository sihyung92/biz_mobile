import React from 'react';
import SignInScreens from './SignInScreens';
import { connect } from 'react-redux';
import * as memberActions from '../store/modules/member';

const SignInScreensContainer = (props) => {
    const {signIn, logIn, logOut, updateCorp, isSignedIn, corp} = props;

    return (
        <SignInScreens
            signIn={signIn}
            logIn={logIn}
            logOut={logOut}
            updateCorp={updateCorp}
            isSignedIn={isSignedIn}
            corp={corp}/>
    )

}

const mapStateToProps = (state) => ({
    isSignedIn: state.member.isSignedIn,
    email: state.member.email,
    password: state.member.password,
    roles: state.member.roles,
    userId: state.member.userId,
    userLang: state.member.userLang,
    corps: state.member.corps,
    corp: state.member.corp,
    langs: state.member.langs,
    isLogin: state.member.isLogin,
    userToken: state.member.userToken,
});

const mapDispatchToProps = (dispatch) => ({
    signIn: (userToken) => dispatch(
        memberActions.signIn(userToken)
    ),
    logIn: () => dispatch(memberActions.logIn()),
    logOut: () => dispatch(memberActions.logOut()),
    updateCorp: (corpId,corpNm) => dispatch(memberActions.updateCorp(corpId,corpNm))
})

export default connect(mapStateToProps, mapDispatchToProps)(
    SignInScreensContainer
);