import axios from 'axios'
const url=process.env.REACT_APP_API
const instance=axios.create({
    baseURL:url
})
export default instance