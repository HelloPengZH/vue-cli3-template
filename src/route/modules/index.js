

// import store from '@/store'

import _import from '../_import'
import shopCar from './shopCar'

const content = [
    {
        path: '/',
		redirect: {name:'car'},
		component:_import('/layout'),
    },
	shopCar
]

export default content
 