
module.exports = {

    name: 'Sitepoint',
    url: 'http://www.sitepoint.com/javascript-validate-email-address-regex/',
    rx: /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm,
    test: function(addr) {
        return this.rx.test(addr);
    }

};
