# LIRS - TAMA REGISTRATION

The LIRS TAX AUDIT MONITORING AGENT (TAMA) is a ...

Currently, we have two goals, which are :

- To register every company under the law as a 
- 

## About the Project

If you are developer, the setup of the project should quiet familiar to ypou as a dashboard that allows users to verify their tax clearance certificate against. We recommend updating the configuration to enable type aware lint rules:
 
##### Todos
- Responsive Navbar Done

- Validate Companiy ID and Phone number before adding an entry
- Make a constraint to >=10 && <= 11
- Increase the textarea height

- Handle error type
 <!-- 
 {
    "message": "Request failed with status code 422",
    "name": "AxiosError",
    "stack": "AxiosError: Request failed with status code 422\n    at settle (http://localhost:5173/node_modules/.vite/deps/axios.js?v=6caf4914:1203:12)\n    at XMLHttpRequest.onloadend (http://localhost:5173/node_modules/.vite/deps/axios.js?v=6caf4914:1420:7)\n    at Axios.request (http://localhost:5173/node_modules/.vite/deps/axios.js?v=6caf4914:1780:41)\n    at async addFiles (http://localhost:5173/src/Api.js?t=1714672862756:65:20)\n    at async submitForm (http://localhost:5173/src/Components/Container4.tsx?t=1714672862756:50:19)",
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5173"
        },
        "method": "post",
        "url": "http://localhost/API/tcc/createFiles.php",
        "data": "{\"dirCert\":\"C:\\\\fakepath\\\\IMM5832E.pdf\",\"lasCard\":\"C:\\\\fakepath\\\\Basic Information.pdf\",\"techEvidence\":\"C:\\\\fakepath\\\\howtopplyforacholarships-apr2023.pdf\"}"
    },
    "code": "ERR_BAD_REQUEST",
    "status": 422
}
 -->
