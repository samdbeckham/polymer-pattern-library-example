module.exports = {
    options: {
        livereload: true
    },
    jekyll: {
        files: ['dev/**/{*.md,index.html}', 'dev/_layouts/*.html'],
        tasks: ['regenerate']
    },
    elements: {
        files: ['dev/_elements/**/{*,!index}.html'],
        tasks: ['copy:elements']
    },
    element_scss: {
        files: ['dev/_elements/**/*.scss'],
        tasks: ['sass:elements']
    },
    configFiles: {
        files: ['gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    },
};
