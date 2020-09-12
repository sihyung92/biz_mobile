import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의
const SIGN_IN = 'member/SIGN_IN';
const LOG_IN = 'member/LOG_IN';
const LOG_OUT = 'member/LOG_OUT';
const UPDATE_CORP = 'member/UPDATE_CORP';
// 액션 생성 함수 생성
export const signIn = createAction(SIGN_IN, (corps, langs, userToken) => ({corps:corps, langs:langs, userToken:userToken}));
export const logIn = createAction(LOG_IN);
export const logOut = createAction(LOG_OUT);
export const updateCorp = createAction(UPDATE_CORP, (corpId, corpNm) => ({corpId: corpId,corpNm: corpNm}));

// 모듈의 초기 상태를 정의합니다. (필수)
// isSignedIn => ID, Password correct, isLogin => corps and lang select
const initialState = {
  isSignedIn: false,
  email: "abc@kobiznet.com",
  password: "",
  roles: "A",
  userId: "",
  userLang: "KO",
  corp: {
    corpId: "",
    corpNm: "",
  },
  corps: [],
  langs: [],
  isLogin : false,
  userToken : "",
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체
// 두번째 파라미터는 초기 상태
export default handleActions({
    //  [SIGN_IN]: (state, action) => ({ isSignedIn: true }) 액션 생략, 비구조화 할당
  [SIGN_IN]: (state, {payload}) => {
    const {corps, langs, userToken} = payload;
    return ({ ...state, corps: corps, langs: langs, userToken: userToken, isSignedIn: true });
  },
  //TODO: corpNm, corpId 받을 필요 없고 corps는 signINScreens에서 다룰 예정 
  [LOG_IN]:(state) => ({ ...state, isLogin:true}),
  [LOG_OUT]: () => initialState,
  [UPDATE_CORP]: ( state , {payload}) => {
    const {corpNm, corpId} = payload;
    return ({...state, corp:{...state.corp, corpNm:corpNm, corpId:corpId}});
  },
}, initialState);