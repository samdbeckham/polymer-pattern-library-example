module.exports = {
    options: {
        livereload: true
    },
    html: {
        files: ['dev/*.html'],
        tasks: ['copy:html']
    },
    elements: {
        files: ['dev/elements/**/*.html'],
        tasks: ['copy:elements']
    },
    configFiles: {
        files: ['gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    },
};
