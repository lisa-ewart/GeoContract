


export function providerType(oldStore, options) {
    const {type} = options;
    return Promise.resolve().then(_ => {
        console.log('here')
        console.log(Object.assign({}, oldStore, {
            type
        }))
        return Object.assign({}, oldStore, {
            type
        });
    });

}








export function updateRoute(oldStore, options) {
    const {currentRoute} = oldStore;
    const {route, time} = options;

    const newRoute = (typeof route === "undefined") ? currentRoute + '/' + time : route;
    return Promise.resolve().then(_ => {
        if (newRoute === currentRoute) {
            return oldStore;
        }
        return Object.assign({}, oldStore, {
            currentRoute: newRoute,
        });
    });
}
