import * as types from './actionType.js'

const initState = {
  data:{},
  userId:null,
}
const Reducer = (state = initState, { type, payload }) => {

    console.log(type)
    console.log(payload)

  switch (type) {
    case types.GETUSERID:
      return {
        ...state,
        userId: payload,
      }
   
    case types.GETDATA:
        return {
          ...state,
          data: payload,
        }
    default:
      return state
  }
}
export default Reducer