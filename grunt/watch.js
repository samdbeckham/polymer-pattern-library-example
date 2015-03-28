module.exports = {
    options: {
        livereload: true
    },
    html: {
        files: ['dev/*.html'],
        tasks: ['copy:html']
    },
    configFiles: {
        files: ['gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    },
};
