import React from 'react';
import HomeScreens from './HomeScreens';
import { connect } from 'react-redux';
import * as menuActions from '../store/modules/menu';

const HomeScreensContainer = (props) => {
    const { menuList } = props;
    return (
        <HomeScreens
            menuList = {menuList}/>
    )
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    menuList: state.menu.menuList,
});

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(
    HomeScreensContainer
);