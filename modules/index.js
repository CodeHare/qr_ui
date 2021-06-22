import Button from './Button';
import Input from './Input';

const QRUI = {};

const COMPONENTS = [
    Button,
    Input
];

QRUI.install = function (Vue, options) {

    if (options && options.components) {
        console.log(options.components);
        const usingComponents = options.components;

        usingComponents.forEach((usingComponent) => {
            COMPONENTS.forEach((systemComponent) => {
                if (usingComponent === systemComponent) {
                    Vue.component(usingComponent.name, systemComponent);
                }
            })
        })
        
    } else {
        COMPONENTS.forEach((systemComponent) => {
            Vue.component(systemComponent.name, systemComponent);
        })
    }
}

export default QRUI;