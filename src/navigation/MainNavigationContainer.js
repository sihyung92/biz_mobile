import React from 'react';
import MainNavigation from './MainNavigation';
import { connect } from 'react-redux';
import * as menuActions from '../store/modules/menu';

const MainNavigationContainer = (props) => {
    const { descriptors, state, navigation, menuList, corpNm } = props;
    return (
        <MainNavigation
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
    MainNavigationContainer
);