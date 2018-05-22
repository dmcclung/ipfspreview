import {bootstrapMicroframework} from 'microframework';
import {expressLoader} from './loaders/expressLoader';
import {ipfsApiLoader} from './loaders/ipfsApiLoader';

bootstrapMicroframework({    
    config: {
        logo: 'IPFS Preview',
        showBootstrapTime: true,
        bootstrapTimeout: 10
    },
    loaders: [ipfsApiLoader, expressLoader]
})
    .then(() => console.log('Application is up and running'))    
    .catch((error: any) => console.log('Error starting application ' + error));

