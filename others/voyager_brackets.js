
module.exports = {

    name: 'Voyager w/ brackets',
    url: 'http://stackoverflow.com/a/9204568/763127',
    rx: /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    test: function(email) {
        return this.rx.test(email);
    }

};
