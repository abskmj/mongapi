module.exports = function(options) {

    let create = function(data) {
        return this.axios('/', {
            method: 'post',
            data
        });
    }

    let find = function(where = {}, projection = {}, options = {}) {

        let params = { where, projection, options };

        return this.axios('/', {
            method: 'get',
            params
        });
    }

    let findById = function(id, projection = {}, options = {}) {

        let params = { projection, options };

        return this.axios('/' + id, {
            method: 'get',
            params
        });
    }

    let count = function(where = {}) {
        let params = { where };

        return this.axios('/count', {
            method: 'get',
            params
        });
    }


    return { find, findById, count };

    // Model.prototype.create = function(data) {
    //     let url = this._getUrl('');

    //     http(url, 'post', data);
    // }
}
