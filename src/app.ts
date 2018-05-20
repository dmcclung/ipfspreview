import {bootstrapMicroframework} from "microframework";
import {expressLoader} from "./loaders/expressLoader";

bootstrapMicroframework({    
    config: {
        logo: "IPFS Preview",
        showBootstrapTime: true,
        bootstrapTimeout: 10
    },
    loaders: [expressLoader]
})
    .then(() => console.log("Application is up and running"))    
    .catch((error: any) => console.log("Error starting application " + error));

