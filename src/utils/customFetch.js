let confirmacion= true;

const customFetch = (time, task) => {
    return new Promise ( (resolve, reject) => {
        setTimeout (() => {
            
            if (confirmacion) {
                resolve (task);
            } else {
                reject("Error in the customFetch: (");
            }

        }, time);
    });
}

export default customFetch;