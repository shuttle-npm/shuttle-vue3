import * as components from "./components";

const ShuttleVue = {
    install(app, options = {}) {
        for (const componentKey in components) {
            app.use(components[componentKey]);
        }
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ShuttleVue);
}

export default ShuttleVue
export * from './components'