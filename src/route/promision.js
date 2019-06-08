import routes from './modules/index'
import _import from './_import'
/**
 * 获取路由转义对象
 * @param {Array} routes 
 */
function getMapRoute(routes){
    let  mapRoute = {} 
    function getRouteMap(routes){
        const routesMap = [...routes]
        routesMap.forEach(route=>{
            if(route.children){
                const {name,meta,path} = route
                mapRoute[route.name] = {name,meta,path}
                getRouteMap(route.children)
            } else {
                mapRoute[route.name] = route
            }
        })
    }

    getRouteMap(routes)
    return mapRoute
}
/**
 * 根据返回数据拼接路由树
 * @param {Array} initList 
 */
export  function getRouter(initList){
    const mapRoute = getMapRoute(routes)
    function getRouteList(initList,grade){
        const list = []
        initList.forEach(route=>{
            let item ={}
            if(route.children&&route.children.length){
                item = mapRoute[route.name]
                item.children = getRouteList(route.children,grade+1)
                if(grade>1){
                    item.component=_import("/layout/menuview")
                } else {
                    item.component=_import("/layout")
                    item.redirect= {name:item.children[0].name}
                }
            } else {
                item = mapRoute[route.name]
            }
            list.push(item)
        })
        return list
    }
    return getRouteList(initList,1)
}
export default getRouter
