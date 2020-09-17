import React from 'react';
import SignInScreens from './SignInScreens';
import { connect } from 'react-redux';
import * as memberActions from '../store/modules/member';
import * as menuActions from '../store/modules/menu';

const SignInScreensContainer = (props) => {
    const {signIn, logIn, logOut, loadMenu, updateCorp, isSignedIn, corp} = props;

    return (
        <SignInScreens
            signIn={signIn}
            logIn={logIn}
            logOut={logOut}
            loadMenu={loadMenu}
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

const mapDispatchToProps = (dispatch, ownProps) => ({
    signIn: (userId, userToken) => dispatch(
        memberActions.signIn(userId, userToken)
    ),
    logIn: () => dispatch(memberActions.logIn()),
    logOut: () => dispatch(memberActions.logOut()),
    loadMenu: (menuList) => dispatch(menuActions.loadMenu(menuList)),
    updateCorp: (corpId,corpNm) => dispatch(memberActions.updateCorp(corpId,corpNm))
})

export default connect(mapStateToProps, mapDispatchToProps)(
    SignInScreensContainer
);