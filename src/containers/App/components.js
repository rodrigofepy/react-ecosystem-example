import SpinnerLoader from '../../components/SpinnerLoader'

export const HomePage = SpinnerLoader({
  loader: () => import('../HomePage')
})
// export const NotFoundPage = SpinnerLoader({
//   loader: () => import('../NotFoundPage')
// })
