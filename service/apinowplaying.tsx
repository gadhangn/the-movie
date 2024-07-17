'use server'

import satellite from "./satellite"


export const getNowPlaying = async (params?: any) => {
  let response = {}
  await satellite
    .get(`/now_playing`, {
      params: params,
    })
    .then((res: any) => {
      response = { status: 'success', data: res }
    })
    .catch((error: any) => {
      response = { status: 'error', data: error }
    })
    .finally(() => {})

  return response
}
