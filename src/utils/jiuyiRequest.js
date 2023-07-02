import axios from 'axios'
import cryptoJS from 'crypto-js'

const http = axios.create({
    baseURL: "https://www.jiuyihtn.com/jiuyiteck/patient",
    timeout: 3000,
    headers: {
        requestLoginTokenValue: 'B0128C56F3CD1590B61298201C555B61A85603013B87A201BB963DEDEB18ACFA8ACE15E6430C0822EE2E0B45DE50669D89BC40A9B0F822E20A600204321D293B',
        requestClientVerify: '878e805913c5468da6d033ca5072071b'

    }

})

export default http

http.interceptors.request.use(function (config) {


    const encryptStr = encrypt(config.data)
    config.data = encryptStr


    return config

}, function (error) {
    return Promise.reject(error)

})


http.interceptors.response.use(function (response) {
    // const json = decrypt(response.data)


    console.log('返回结果', JSON.parse(decrypt(response.data)));
    response.data = JSON.parse(decrypt(response.data))
    return response

}, function (error) {
    alert(error.code)

})
//加密
function encrypt(from) {


    const key = cryptoJS.enc.Utf8.parse('gDNMNdiDB6r68mLO')
    const iv = cryptoJS.enc.Utf8.parse('U0OnfhpZxidtzXvO')
    const srcs = cryptoJS.enc.Utf8.parse(JSON.stringify(from))

    const encrypted = cryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: cryptoJS.mode.CBC,
        padding: cryptoJS.pad.Pkcs7
    })

    return encrypted.toString()
}
//解密
function decrypt(data) {
    const key = cryptoJS.enc.Utf8.parse('gDNMNdiDB6r68mLO')
    const iv = cryptoJS.enc.Utf8.parse('U0OnfhpZxidtzXvO')
    const decrypted = cryptoJS.AES.decrypt(data, key, {
        iv: iv,
        mode: cryptoJS.mode.CBC,
        padding: cryptoJS.pad.Pkcs7
    })
    return decrypted.toString(cryptoJS.enc.Utf8)

}