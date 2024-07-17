'use server'

import satellite from "./satellite"


export const getPopular = async (params?: any) => {
  let response = {}
  await satellite
    .get(`/popular`, {
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
