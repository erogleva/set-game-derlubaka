const ghpages = require('gh-pages');

ghpages.publish('build', {
    remote: 'custom'
}, function(err) {console.log(err)});