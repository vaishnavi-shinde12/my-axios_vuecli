import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-axios-vuecli.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance