'use client'

import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { store } from '@/store/storage'
import { queryClient } from '@/service/config/queryClient'

export default function ContainerProvider({ children }: { readonly children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="colored"
        />
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  )
}
