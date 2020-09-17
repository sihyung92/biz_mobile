import React from 'react';
import HomeScreens from './HomeScreens';
import { connect } from 'react-redux';
import * as menuActions from '../store/modules/menu';

const HomeScreensContainer = (props) => {
    const { descriptors, state, navigation, menuList, corpNm } = props;
    return (
        <HomeScreens
            descriptors={descriptors}
            state={state}
            navigation={navigation}
            menuList = {menuList}
            corpNm = {corpNm}/>
    )
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    menuList: state.menu.menuList,
    corpNm: state.member.corp.corpNm,
});

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(
    HomeScreensContainer
);