# 0X01-Webpack

# Learning Objectives


    npm packge ???
        an npm package is a json file that tells details about your package ig?
        like name versions known bugs, stuff like
        that also can be used to like save known used commands for the dev like cycle of the app or package ?
        also using the npm command u can install other node packages like jquery
        those packges names will be added to your package.json file under the dependencies or DevDependencies
    




    what the heck is modules and modular programming ?
    In modular programming, developers break programs up into discrete chunks of functionality called a module.
    a module is a chunk of code, that serves a spesfic purpose

    unlike node js, webpack modules are considerd differnet
    it's almost everything that could be either linked (a image url in a stylesheet, jpeg image url in html)
    an import statment in ecmascript
    a commonJs require
    an amd define
    @import sass, csss  

    loaders
    webpack only, will load, process, understand 
    Only either a javascript script, code Or a JSON file(s)
    loaders will help us with other file types such as HTML CSS SASS TS
    loaders will process those files and convert them into valid modules that can be consumed by the app and added to the dep graph
    loaders are mentioned as "module" in the json
    and with an array of rules that is made out of a test and use properties
    the test would provide which files or file should be trasformed (compiler, pre processed etc) to fit with the app
    the use is the loader should be used to handle the prev task 


  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
    The configuration above has defined a rules property for a single module with two required  properties: test and use. This tells webpack's compiler the following:
    
    "Hey webpack compiler, when you come across a path that resolves to a '.txt' file inside of a require   ()/import statement, use the raw-loader to transform it before you add it to the bundle."






    What the heck is webpack ??
    is a module bundler, meaning ??
    Web pack core concepts:
    entry : requires the entry point ?
    when u app starts from, then looks for other dependinencies
    and internanly drawin ?
    a graph

    output ? result maybe
    loaders idk
    plugins as the name suggests like html plugin the http 2 pluging alsoososos
    mode: dev, prod, test etc ?
    browser copatibitlity


    How to setup Webpack for a basic project
    Entry points, output, and loaders
    How to add plugins
    How to split your code into chunks
    How to setup a dev server