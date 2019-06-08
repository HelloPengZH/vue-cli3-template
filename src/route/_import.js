let _import ;
if(process.env.NODE_ENV ==='development'){
	_import = file => require('@/views' + file ).default
} else{
	_import = file => () => import('@/views'+file)
}

export default _import
