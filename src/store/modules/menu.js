import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의
const LOAD_MENU = 'menu/LOAD_MENU';
const CHECK_PERMIT = 'menu/CHECK_PERMIT';

// 액션 생성 함수 생성
export const loadMenu = createAction(LOAD_MENU, (menuList) => menuList);
export const checkPermit = createAction(CHECK_PERMIT);

// 모듈의 초기 상태를 정의합니다. (필수)
//   menuList: {menuId: "", menuNm: "", menuPermit: "",}
//0110011000 << 볼수있음
//0010011000 << 에러 나야함
const initialState = {
    menuList: [
  {
    name: 'Home',
    menuId: '모바일테스트1',
    menuPermit: '00110011',
    //component: HomeScreenContainer,
  },
  {
    name: 'Home',
    menuId: '모바일테스트1',
    menuPermit: '00110011',
    //component: HomeScreenContainer,
  },
  {
    name: 'Home',
    menuId: '모바일테스트1',
    menuPermit: '00110011',
    //component: HomeScreenContainer,
  },
],
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체
// 두번째 파라미터는 초기 상태
export default handleActions({
    //  [SIGN_IN]: (state, action) => ({ isSignedIn: true }) 액션 생략, 비구조화 할당
  [LOAD_MENU]: (state, { payload: menuList }) => ({ ...state}),
  [CHECK_PERMIT]:(state) => ({}),
}, initialState);