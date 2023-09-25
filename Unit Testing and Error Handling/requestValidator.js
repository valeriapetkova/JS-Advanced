function requestValidator(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let regexURI = /^[\w.]+$/g;
    let regexMessage = /[<>&'"\\]/g;

    if (!obj.hasOwnProperty('method') || !validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!obj.hasOwnProperty('uri') || !regexURI.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!obj.hasOwnProperty('version') || !validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!obj.hasOwnProperty('message') || regexMessage.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    
    return obj; 
}