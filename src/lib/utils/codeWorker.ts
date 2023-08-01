

self.addEventListener('message', (e) => {
    const {data} = e;

    (() => {
        1 * 1;
    })()

    console.log(data, '1');
    
    self.postMessage(data);
})