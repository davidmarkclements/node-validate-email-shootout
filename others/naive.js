
module.exports = {

    name: 'Naive @ and . test',
    url: 'http://stackoverflow.com/a/9204568/763127',
    rx: /\S+@\S+\.\S+/,
    test: function(email) {
        return this.rx.test(email);
    }

};
