const fakeApi = (data) => new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(data);
    }, 2000);
});

export default fakeApi;