import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    disable: 'phone',
    duration: 2000,
    offset: 1,
    once: true
  })
}