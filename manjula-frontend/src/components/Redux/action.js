import * as types from './actionType.js'

export const login1 = (payload) => {
    console.log(payload)
    return {
      type: types.GETUSERID,
      payload,
    }
  }

export const setdata =(payload)=>{
    console.log(payload)
    return {
        type:types.GETDATA,
        payload
    }
}
  