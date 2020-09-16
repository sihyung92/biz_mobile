import React from 'react';
import DrawerScreens from './DrawerScreens';
import { connect } from 'react-redux';
import * as memberActions from '../store/modules/member';

const DrawerScreensContainer = (props) => {
    return (
        <DrawerScreens
        descriptors={props.descriptors}
        state={props.state}
        navigation={props.navigation}
        logOut={props.logOut}
        corpNm={props.corpNm}/>
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