import {MicroframeworkSettings} from 'microframework';

// TODO: Add typescript declaration
var ipfsAPI = require('ipfs-api');

export function ipfsApiLoader(options?: MicroframeworkSettings) {
    const ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});
    if (options) {
        options.setData('ipfs', ipfs);
    } 
}