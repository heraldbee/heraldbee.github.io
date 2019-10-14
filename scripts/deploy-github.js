const ghpages = require('gh-pages')

ghpages.publish(
    'public',
    {
        branch: 'static',
        repo: 'https://github.com/heraldbee/meta-website',
    },
    () => {
        console.log('Deploy Complete!')
    }
)