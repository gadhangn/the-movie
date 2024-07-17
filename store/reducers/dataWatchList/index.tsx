const initialState: any[] = []

const dataWatchList = (state = initialState, action: any) => {
  switch (action.type) {
    case '@APP/WATCH/ADD':
      return [...state, ...action.payload]
    case '@APP/WATCH/CLEAR':
      return []
    case '@APP/WATCH/REMOVE':
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}

export default dataWatchList
