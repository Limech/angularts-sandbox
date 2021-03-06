

module.exports = function(grunt) {
	
    grunt.loadNpmTasks("grunt-ts");

	  var taskConfig = {

		ts: {
        // A specific target
        build: {
            // The source TypeScript files, http://gruntjs.com/configuring-tasks#files
            src: ["app/scripts/**/*.ts"],
            // The source html files, https://github.com/grunt-ts/grunt-ts#html-2-typescript-support   
            // html: ["test/work/**/*.tpl.html"], 
            // If specified, generate this file that to can use for reference management
            reference: "./typings/reference.ts",  
            // If specified, generate an out.js file which is the merged js file
            // out: 'test/out.js',
            // If specified, the generate JavaScript files are placed here. Only works if out is not specified
            // outDir: 'test/outputdirectory',
            // If specified, watches this directory for changes, and re-runs the current target
            watch: 'app/scripts',                     
            // Use to override the default options, http://gruntjs.com/configuring-tasks#options
            options: {     
                // 'es3' (default) | 'es5'
                target: 'es3',
                // 'amd' (default) | 'commonjs'    
                module: 'commonjs',
                // true (default) | false
                sourceMap: true,
                // true | false (default)
                declaration: false,
                // true (default) | false
                removeComments: false
            }
        }
		}
    
    };

   grunt.initConfig(taskConfig);

    grunt.registerTask("default", ["ts:build"]);

};