module.exports = {
    html: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/',
            dest: '.tmp/',
            src: '*.html'
        }]
    },
    elements: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev',
            dest: '.tmp',
            src: '_elements/**/*.html'
        }]
    }
};
