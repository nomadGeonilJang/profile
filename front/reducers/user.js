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
  isEditingNickname:false,
  editNicknameErrorReason:'',
  hasMoreFollower:false,
  hasMoreFollowing:false,
};


export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOAD_USER_REQUEST_ME = 'LOAD_USER_REQUEST_ME';
export const LOAD_USER_SUCCESS_ME = 'LOAD_USER_SUCCESS_ME';
export const LOAD_USER_FAILURE_ME = 'LOAD_USER_FAILURE_ME';

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
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

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
        signedUp:false,
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
    case LOAD_USER_REQUEST_ME:{
      return{
        ...state,
      }
    }
    case LOAD_USER_SUCCESS_ME:{
        return{
          ...state,
          me:action.data,
        }
    }
    case LOAD_USER_FAILURE_ME:{
      return{
        ...state,
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
        userInfo:action.data
      }
    }
    case LOAD_USER_FAILURE:{
      return{
        ...state,
      }
    }
    case FOLLOW_USER_REQUEST:{
      return{
        ...state,
      }
    }
    case FOLLOW_USER_SUCCESS:{
      return{
        ...state,
        me:{
          ...state.me,
          Followings:[{id:action.data}, ...state.me.Followings]
        }
      }
    }
    case FOLLOW_USER_FAILURE:{
      return{
        ...state,
      }
    }
    case UNFOLLOW_USER_REQUEST:{
      return{
        ...state,
      }
    }
    case UNFOLLOW_USER_SUCCESS:{
      return{
        ...state,
        me:{
          ...state.me,
          Followings:state.me.Followings.filter(u => u.id !== action.data)
        },
        followingList:state.followingList.filter(u=> u.id !== action.data)
      }
    }
    case UNFOLLOW_USER_FAILURE:{
      return{
        ...state,
      }
    }
    case ADD_POST_TO_ME:{
      return{
        ...state,
        me:{
          ...state.me,
          Posts:[{id:action.data}, ...state.me.Posts]
        }
      }
    }
    case REMOVE_POST_OF_ME:{
      return{
        ...state,
        me:{
          ...state.me,
          Posts:state.me.Posts.filter(v => v.id !== action.data)
        }
      }
    }
    case LOAD_FOLLOWERS_REQUEST:{
      return{
        ...state,
        followerList : !action.offset ? [] : state.followerList,
        hasMoreFollower:action.offset ? state.hasMoreFollower : true,
      }
    }
    case LOAD_FOLLOWERS_SUCCESS:{
      return{
        ...state,
        followerList: action.offset === 0 ? action.data :[...state.followerList,...action.data],
        hasMoreFollower : action.data.length === 3,
      }
    }
    case LOAD_FOLLOWERS_FAILURE:{
      return{
        ...state,
      }
    }
    case LOAD_FOLLOWINGS_REQUEST:{
      return{
        ...state,
        followingList: state.followingList.length === 0 ? [] : state.followingList,
        hasMoreFollowing:action.offset ? state.hasMoreFollowing : true,
      }
    }
    case LOAD_FOLLOWINGS_SUCCESS:{
      return{
        ...state,
        followingList:state.followingList.length <= 3 ? action.data : [...state.followingList, ...action.data],
        hasMoreFollowing : action.data.length === 3,
      }
    }
    case LOAD_FOLLOWINGS_FAILURE:{
      return{
        ...state,
      }
    }
    case REMOVE_FOLLOWER_REQUEST:{
      return{
        ...state,
      }
    }
    case REMOVE_FOLLOWER_SUCCESS:{
      return{
        ...state,
        me:{
          ...state.me,
          Followers:state.me.Followers.filter(v=>v.id !== action.data)
        },
        followerList:state.followerList.filter(v=>v.id !==action.data)
      }
    }
    case REMOVE_FOLLOWER_FAILURE:{
      return{
        ...state,
      }
    }
    case EDIT_NICKNAME_REQUEST:{
      return{
        ...state,
        isEditingNickname:true,
        editNicknameErrorReason:''
      }
    }
    case EDIT_NICKNAME_SUCCESS:{
      return{
        ...state,
        isEditingNickname:false,
        me:{
          ...state.me,
          nickname:action.data,
        }
      }
    }
    case EDIT_NICKNAME_FAILURE:{
      return{
        ...state,
        isEditingNickname:false,
        editNicknameErrorReason:action.error
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
