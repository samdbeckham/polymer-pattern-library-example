module.exports = {
    options: {
        livereload: true
    },
    html: {
        files: ['dev/*.html'],
        tasks: ['copy:html']
    },
    elements: {
        files: ['dev/elements/**/*.{html,css}'],
        tasks: ['copy:elements']
    },
    element_scss: {
        files: ['dev/elements/**/*.scss'],
        tasks: ['sass:elements']
    },
    configFiles: {
        files: ['gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    },
};
