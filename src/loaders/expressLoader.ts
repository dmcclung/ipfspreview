import {MicroframeworkSettings} from 'microframework';
import express from 'express';

export function expressLoader(options?: MicroframeworkSettings) {
    let ipfs: any;
    if (options) {
        ipfs = options.getData('ipfs');
    }

    const app = express();

    app.get('/stat/:multihash', (req, res) => {
        let multihash = req.params['multihash'];
        ipfs.object.stat(multihash)
            .then( (stats: any) => {
                res.send(stats);
            })
            .catch( (error: any) => {
                console.log(error);
                res.sendStatus(500);                
            });        
    });

    app.listen(3000, () => console.log('App listening on port 3000'))
    
}

