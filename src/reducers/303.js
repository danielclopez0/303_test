const defaultState = {
  fetching: false,
  data: null,
  error: null,
};

export default (state = defaultState, action) => {
 const { type, payload } = action;

 switch (type) {
  case 'REQUEST_DATA':
   return {
    ...state,
    fetching: true,
   }
  case 'RECEIVE_DATA':
   return {
    fetching: false,
    data: payload,
    error: null,
   }
  case 'DATA_ERROR':
   return {
     fetching: false,
     data: null,
     error: payload,
   }
  default:
   return state
 }
}
