import QRButton from './src/button';

QRButton.install = function (Vue) { 
    Vue.component(QRButton.name, QRButton);
};

export default QRButton;