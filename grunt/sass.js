module.exports = {
    patterns: {
        options: {
            style: 'compressed'    
        },
        files: [{
            expand: true,
            cwd: 'dev/_assets/scss/',
            src: '*.scss',
            dest: '.tmp/css/',
            ext: '.css'
        }]
    },
    elements: {
	options: {
            style: 'expanded',
            lineNumbers: true,
            sourcemap: 'none'
        },
        files: [{
            expand: true,
            cwd: 'dev/_elements/',
            src: '*/scss/*.scss',
            dest: '.tmp/elements/',
            ext: '.css',
            rename: function(dest, src) {
                return dest + src.replace('/scss', '');
            }
        }]
    }
};
