import React from 'react';
import DrawerScreens from './DrawerScreens';
import { connect } from 'react-redux';
import * as memberActions from '../store/modules/member';

const DrawerScreensContainer = (props) => {
    const { descriptors, state, navigation, logOut, corpNm} = props;
    return (
        <DrawerScreens
        descriptors={descriptors}
        state={state}
        navigation={navigation}
        logOut={logOut}
        corpNm={corpNm}/>
    )
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    corpNm : state.member.corp.corpNm
});

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(memberActions.logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(
    DrawerScreensContainer
);