import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의
const LOAD_MENU = 'menu/LOAD_MENU';
const CHECK_PERMIT = 'menu/CHECK_PERMIT';

// 액션 생성 함수 생성
export const loadMenu = createAction(LOAD_MENU, (menuList) => menuList);
export const checkPermit = createAction(CHECK_PERMIT);

// 모듈의 초기 상태를 정의합니다. (필수)
//   menuList: {menuId: "", menuNm: "", menuPermit: "",}
//TODO : 현재 menu ID 및 menuNm 안 받아오고 있음 API 수정요 
//0110011000 << 볼수있음
//0010011000 << 에러나야함
const initialState = {
    menuList: [],
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체
// 두번째 파라미터는 초기 상태
export default handleActions({
  [LOAD_MENU]: (state, { payload: menuList }) => ({ ...state, menuList: menuList }),
  [CHECK_PERMIT]:(state) => ({}),
}, initialState);