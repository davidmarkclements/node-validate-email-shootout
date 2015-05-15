
module.exports = {

    name: 'RFC2822 HTML5',
    url: 'https://fightingforalostcause.net/content/misc/2006/compare-email-regex.php',
    rx: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    test: function(addr) {
        return this.rx.test(addr);
    }

};
