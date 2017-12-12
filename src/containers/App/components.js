import SpinnerLoader from 'components/SpinnerLoader'

export const HomePage = SpinnerLoader({
  loader: () => import('containers/HomePage')
})
// export const NotFoundPage = SpinnerLoader({
//   loader: () => import('../NotFoundPage')
// })
