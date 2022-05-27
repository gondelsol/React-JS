const getDetail = async (time, task) => {
    let confirmacion= true;
    return new Promise ( (resolve, reject) => {
        setTimeout (() => {
            if (confirmacion) {
                resolve (task);
            } else {
                reject("Error en getDetail");
            }
        }, time);
    });
}

export default getDetail;