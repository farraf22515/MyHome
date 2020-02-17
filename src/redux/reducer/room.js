import { ADD_ELECTRIC_THIS_MONTH, ADD_WATER_THIS_MONTH, RESET_MONTH } from '../action/index'
import { rooms } from '../dummyData'

const addElectricThisMonth = (content, name, date, value) => {
  if (content.name !== name) {
    return content
  }
  const contentCopy = content
  contentCopy.fire.new = value
  return contentCopy
}

const addWaterThisMonth = (content, name, date, value) => {
  if (content.name !== name) {
    return content
  }
  const contentCopy = content
  contentCopy.water.new = value
  return contentCopy
}

const resetMonth = (content, date) => {
  const contentCopy = content
  contentCopy.water.old = content.water.new
  contentCopy.water.new = -1

  contentCopy.electric.old = content.electric.new
  contentCopy.electric.new = -1

  contentCopy.date = date
  return contentCopy
}

const room = (state = rooms, action) => {
  switch (action.type) {
    case ADD_ELECTRIC_THIS_MONTH:
      return state.map(content => {
        return addElectricThisMonth(content, action.name, action.date, action.value)
      })
    case ADD_WATER_THIS_MONTH:
      return state.map(content => {
        return addWaterThisMonth(content, action.name, action.date, action.value)
      })
    case RESET_MONTH:
      return state.map(content => {
        return resetMonth(content, action.date)
      })
    default:
      return state
  }
}

export default room