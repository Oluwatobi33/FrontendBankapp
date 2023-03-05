let baseurl;
if (process.env.NODE_ENV == 'production') {
    baseurl = 'http://localhost:5500/';
} else {
    baseurl = 'http://localhost:5500/';
}

export { baseurl }