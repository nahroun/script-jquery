module.export = function(grunt){
    
    //tasks loadings
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt configuration
    grunt.initConfig({
        //bigin tasks declaration
        //watch for js files change
       watch:{
script:{
file: ['src/js/app.js'],
task:['jshint']
}



}

    });
    grunt.registerTasks('default',['watch']);
};