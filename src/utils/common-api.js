import {getRequest} from './axios-request'

const _import = (file, path) => {
    if (!path) path = 'views'
    return require(`../${path}/${file}.vue`)
  }


export const initMenu = (router, store)=> {
    if (store.state.routes.length > 0) {
        return;
    }

    getRequest("/manage/permission/initMenu").then(resp=> {
        if (resp && resp.status == 200) {
        var fmtRoutes = formatRoutes(resp.data);
        router.addRoutes(fmtRoutes);
        store.commit('initMenu', fmtRoutes);
        //store.dispatch('connect');
        }
    })
}

const formatRoutes = (routes)=> {
    let fmRoutes = [];
    routes.forEach(router=> {
        let {
        path,
        component,
        name,
        meta,
        iconCls,
        children
        } = router;
        if (children && children instanceof Array) {
        children = formatRoutes(children);
        }
        let fmRouter = {
        path: path,
        //component: resolve => require(['../components/HelloWorld.vue'], resolve),
        component(resolve){
            if (component.startsWith("Home")) {
                require(['../views/Home.vue'], resolve)
            } else {
                require(['../views/'+ component +'.vue'], resolve)
            }
          },
        name: name,
        iconCls: iconCls,
        meta: meta,
        children: children
        };
        fmRoutes.push(fmRouter);
    })
    return fmRoutes;
}
