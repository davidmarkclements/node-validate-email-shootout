
module.exports = {

    name: 'Sectrean',
    url: 'http://stackoverflow.com/a/46181/763127',
    rx: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    test: function(addr) {
        return this.rx.test(addr);
    }

};
