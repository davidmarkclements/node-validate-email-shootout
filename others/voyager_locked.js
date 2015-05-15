
module.exports = {

    name: 'Voyager locked',
    url: 'http://stackoverflow.com/a/9204568/763127',
    rx: /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\\b/,
    test: function(email) {
        return this.rx.test(email);
    }

};
