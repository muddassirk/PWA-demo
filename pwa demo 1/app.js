if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register("./service-worker") //serviceWorker file location in folder
    .then(function(){
        console.log("service worker registered successfully");
    })
    .catch(function(){
        console.log("Something goes wrong while registrating service worker");
        // console.log(error);
    });

}else{
    console.log("Service worker in not available");
}