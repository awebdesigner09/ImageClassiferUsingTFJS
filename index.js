let net;

async function app() {
    console.log('Loading mobilenet..');

    net = await mobilenet.load();
    console.log('Successfully loaded model');

    const imgEl = document.getElementById('img');
    const result = await net.classify(imgEl);
    console.log(result);
}

app();