export const initialState = {
  isLoggedIn:false,
  isLoggingIn:false,
  isLoggingOut:false,
  isSigningUp:false,
  logInErrorReason:'',
  logOutErrorReason:'',
  signUpErrorReason:'',
  signedUp:false,
  followingList:[],
  followerList:[],
  userInfo:null, //남의 정보
  me:null,
};


const dummy = {
  id:1,
  isLoggedIn:true,
  nickname:"장건일",
  Posts:[1,2,3],
  Followings:[1,2,4,5],
  Followers:[2],
  signUpData:{
    id:'',
    password:'',
    nickname:''
  },
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:{
      return{
        ...state,
        isLoggingIn:true,
      }
    }
    case LOG_IN_SUCCESS:{
      return{
        ...state,
        me:action.data,
        isLoggingIn:false,
      }
    }
    case LOG_IN_FAILURE:{
      return{
        ...state,
        me:{},
        isLoggingIn:false,
        logInErrorReason:action.error
      }
    }
    case LOG_OUT_REQUEST:{
      return{
        ...state,
        isLoggingOut:true,
      }
    }
    case LOG_OUT_SUCCESS:{
      return{
        ...state,
        isLoggingOut:false,
        me:null
      }
    }
    case LOG_OUT_FAILURE:{
      return{
        ...state,
        isLoggingOut:false,
      }
    }
    case SIGN_UP_REQUEST:{
      return{
        ...state,
        isSigningUp:true,
      }
    }
    case SIGN_UP_SUCCESS:{
      return{
        ...state,
        isSigningUp:false,
        signedUp:true,
      }
    }
    case SIGN_UP_FAILURE:{
      return{
        ...state,
        isSigningUp:false,
        signedUp:false,
        signUpErrorReason:action.error
      }
    }
    case LOAD_USER_REQUEST:{
      return{
        ...state,
      }
    }
    case LOAD_USER_SUCCESS:{
      return{
        ...state,
        me:action.data,
      }
    }
    case LOAD_USER_FAILURE:{
      return{
        ...state,
      }
    }
    default:{
      return{
        ...state,
      }
    }

  }
}

export default reducer
