import React from 'react';
import MyPageScreens from './MyPageScreens';
import { connect } from 'react-redux';
import * as menuActions from '../store/modules/menu';

const MyPageScreenContainer = (props) => {
    const { descriptors, state, navigation, corpNm } = props;
    return (
        <MyPageScreens
            descriptors={descriptors}
            state={state}
            navigation={navigation}
            corpNm = {corpNm}/>
    )
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    corpNm: state.member.corp.corpNm,
});

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(
    MyPageScreenContainer
);