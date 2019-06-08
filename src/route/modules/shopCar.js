import _import from '../_import'
export default {
	path: 'shopCar',
    name: 'shopCar',
    redirect: {name:"car"},
    component:_import('/shopCar'),
    children:[
        {
            path: 'car',
            name: 'car',
            component:_import('/shopCar/cai'),
        }
    ]
}