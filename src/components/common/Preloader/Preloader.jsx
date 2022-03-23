import PreloaderStyles from './Preloader.module.css'

const Preloader = () => {
  return (
  <div className={PreloaderStyles.preloader} data-test-id={'loader'}>
    <div className={PreloaderStyles.spinner}>
    </div>
  </div>
  )
}

export default Preloader;