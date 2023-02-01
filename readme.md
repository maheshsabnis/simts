# Modern Fron-End Programming
- ESx
    - x is the Language Version number
    - 6,7,8,9,10,11, next
    - High-Level JS Object Model for building Modern Optimized Browser Apps
- High-Level JavaScript aka Modern JS aka ES
    - USed for Building Complex JS object Model front-End
    - React, Vue, React-Native, etc.
    - Babel Transpiler, (Compiled Trensformation)
        - Transforms High-Level JS to ES 3/5 (Browser Supportive JS) 
- Dart
    - By Google
    - Compiled into JavaScript
    - Dart Transpiler
        - .dart files to .js    
- TypeScript
    - By Microsoft
    - Born from C# And Java
    - Based on DataTypes
        - Provides Power to JS Development
        - Typed JavaScript        
    - TypeScript Transpiler
        - .ts files to .js
        - tsc file.ts
            - will generate file.js
- Install TypeScript Transopiler
    - npm install --global typescript
- DataTYpes
    - number, string, date, boolean, object, etc.
    - Array
    - Enum, Class, Type
    - Union Types
        - Declaring a variable with more than one datatype
- Programming Improvization for
    - Strings, using interpolation
    - Array and String methods for Data Management
- Modularity Support 
    - Create re-usable modules for Sharing Types (e.g. Classes)
- Object Oriented Programming
    - Class
        - Default access specifier for class membersn is 'public' 
        - Explicit 'private' and  'protected' declarations
        - No-support for Overloading by default
    - Instance Creation using 'new' keyword 
    - 'Constructor()' is a Standard method  
        - Parametrized Constructor
        - Parametrized Constructor with access specifier to each parameter to make them as class data members
    - get/set properties
        - TS 3.0+ with default support
- TypeScript Project Creation
    - install TypeScript Transpiler
        - npm install --global typescript
    - Create a Package Congiguration file aka package.json
        - THis file will have the application configurations with its dependencies
        - npm init -y
            - THis will generate package.json with defaults
    - Generate the tsconfig.json file for Transpilation Configiration
        - tsc --init
# Function Concepts
    - Reference function
    - Close-Functions
        - aka Regular JS Function Body that returns an object
            - function MyObject(){  return {Object} }
            - aka "FIrst-Class-Function" i.e. {Object}
                - The Object having Child Functions assigned to a reference Variable       
    - IIFE
        - Self-Executable JS
        - Module thatn contains "First-Class-Functions"     
    - Higher-Order-Functions
        - A function that received another function as argument or its returns new function or can so both.  
        - THis is Possible because of the First-Class-Functions      
                     
         
