
module.exports = {

    name: 'Tugrul Asik',
    url: 'http://stackoverflow.com/a/14622590/763127',
    rx: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    test: function(addr) {
        return this.rx.test(addr);
    }

};
