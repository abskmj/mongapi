const axios = require('axios');

axios.defaults.baseURL = 'https://private-torfeat.c9users.io/api';

const mongapi = require('./index.js')({
    axios,
    models: {
        games: {
            uri: '/games',
            plugins: {
                './plugin.js': true
            }
        }
    }
});

mongapi.games.find({ offer_id : '3395532212'})
.then((res) => {
    console.log('//=== RES ===//', res.data);
})
.catch((e) => { console.error(e) });
