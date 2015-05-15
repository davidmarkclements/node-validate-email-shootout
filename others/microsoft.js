
module.exports = {

    name: 'Microsoft',
    url: 'http://stackoverflow.com/a/20373180/763127',
    rx: /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
    test: function(addr) {
        return this.rx.test(addr);
    }

};
