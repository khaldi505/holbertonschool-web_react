# 0x00. Typescript

Learning type script for a school project
Those are notes that need to be organized few of them were lines
copied from google or blogs, that hopefully one day i might update when 
either refreshing my memorie or simply trying to get that satisfaction
but deadlines are standing in the way

## What I Learned From This Project :

### Quick Introduction To Typescript

    Typerscript is a superset of javascript made and maintained by microsoft at 2012 (9 years ago)
    back then (somehow still) javascript was not meant to create large and scalable apps, and even though it supports a large variety of types javascript still offer a great deal of flexibility that could lead to a spaghetti code, like for example:

         ```js
         let sum = 5 + 5;
         sum = (a, b) => a + b
         ```

    see how we went from decalring a variable that holds a number to it holding a literal function
    when we're writing a huge app we don't apperiacite that great deal of flexibility provided by JS
    Typescrpe provides that can only hold what they're refrenced to, and yet it's amazingly flexible and more adaptive to our needs.

    it also provides you with a huge productivity boost in the IDE, i.e you can see errors durring
    the process of writing code before even compiling your code 
    
    To keep it short Typescript covers JS gaps, and saves you the headache of probably minutes or even hours of debugging by simply getting most of it right from the very beginning.
    don't get me wrong, this doesn't mean that you'll write more code,
    cause the internet also says that you'll write less code when you're using TS
    instead of JS, i'm not yet sure about this.

##### Basic types in Typescript:
    Before we head into Typescript basic types,
    let's refresh our memories on JS data types,
    so we can make more sense of why we need this superset..
    Google says that
    Primitive values (immutable datum represented directly at the lowest level of the language) Boolean type. Null type. Undefined type. Number type. BigInt type. String type. Symbol type.
    Objects (collections of properties)
    From the typescript website
    Basic types are :
    For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support the same types as you would expect in JavaScript, with an extra enumeration type thrown in to help things along.

    almost every primitive type in JS have their own data type also in TS and non primitive types are represented by the object. 

#### Interfaces, Classes, and functions

    

#### How to work with the DOM and Typescript

#### Generic types

#### How to use namespaces

#### How to merge declarations

#### How to use an ambient Namespace to import an external library

#### Basic nominal typing with Typescript

## Getting Started

### Dependencies

-- Set up basic node environment, create the Configuration Files 
-- install typescript transpiler also known as TSC stands for TypeScript Compliler (Transpilers, also known as source-to-source compilers)
