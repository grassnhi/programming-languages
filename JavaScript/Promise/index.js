// PROMISE

const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;

    if(fileLoaded){
        resolve("File loaded");
    }else{
        reject("File NOT loaded");
    }
});

promise.then((value) => {console.log(value)}).catch((error) => console.log(error));

const promises = new Promise( resolve => {
    setTimeout(resolve, 5000);
});

promises.then(() => console.log("Thank for waiting!"));

const wait =  time => new Promise( resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thank for waiting!"));


// ASYNC -> makes a function return a Promise

async function loadFile(){
    let fileLoaded = false;

    if(fileLoaded){
        return "File loaded";
        // return Promise.resolve("File loaded");
    }else{
        throw "File NOT loaded";
        // throw Promise.reject("File NOT loaded");
    }
}

loadFile().then((value) => {console.log(value)})
            .catch((error) => console.log(error));


// AWAIT -> makes a async function wait for a Promise

async function startProcess(){
    try{
        let message = await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}

startProcess();