import * as components from "./components";

const ShuttleVue = {
    install(app, options = {}) {
        for (const componentKey in components) {
            const component = components[componentKey];
            
            app.component(componentKey, component);
        }
    }
}

export default ShuttleVue
export * from './components'