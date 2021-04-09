const fakeApi = (data) => new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(data);
    }, 1000);
});

export default fakeApi;