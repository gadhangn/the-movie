export function setDataWatchList(data: any[]) {
  return {
    type: '@APP/WATCH/ADD',
    payload: data,
  }
}
export function clearDataWatchList() {
  return {
    type: '@APP/WATCH/CLEAR',
  }
}

export function removeFromWatchList(id: number) {
  return {
    type: '@APP/WATCH/REMOVE',
    payload: id,
  }
}
