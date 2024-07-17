'use server'

import satellite from "./satellite"


export const getUpcoming = async (params?: any) => {
  let response = {}
  await satellite
    .get(`/upcoming`, {
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
