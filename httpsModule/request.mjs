function encrypt(data) {
    return 'encrypted data';
}

function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`encrypted data: ${encryptedData}`);
}

export { send };