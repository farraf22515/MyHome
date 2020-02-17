export const CHANGE_ROOM_CONFIG = "CHANGE_ROOM_CONFIG"
export const ADD_ELECTRIC_THIS_MONTH = "ADD_ELECTRIC_THIS_MONTH"
export const ADD_WATER_THIS_MONTH = "ADD_WATER_THIS_MONTH"
export const RESET_MONTH = "RESET_MONTH"

export const changeRoomConfig = (name) => {
  return ({
    type: CHANGE_ROOM_CONFIG,
    name: name
  })
}

export const addElectricThisMonth = (date, name, value) => {
  return ({
    type: ADD_ELECTRIC_THIS_MONTH,
    date, name, value
  })
}

export const addWaterThisMonth = (date, name, value) => {
  return ({
    type: ADD_WATER_THIS_MONTH,
    date, name, value
  })
}

export const resetMonth = (date) => {
  return ({
    type: RESET_MONTH,
    date
  })
}