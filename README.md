# lazy-g-cli

[![Build Status](https://travis-ci.org/joeyism/lazy-g-cli.svg)](https://travis-ci.org/joeyism/lazy-g-cli)

    > g

Whether you are *grunt*-ing, or *gulp*-ing, sometimes it is a hassel to type the whole word. **Lazy-g-cli** allows you to grunt/gulp with all the parameters, without having to type out the entire word of grunt/gulp. Because we are that lazy.

### To Install

    > npm install -g lazy-g-cli

### To Run

Whether you need grunt or gulp, just run

    > g

#### With Parameters

Running with parameteres is the same. That means running

    > g [param]

is the same as running

    > grunt/gulp [param]

**Shorthanded Parameters**

It is also possible to run parameters with shorthand, i.e. using only 1 letter. The letters are matched as such
    
    t = test

    d = dist

This means running *grunt/gulp test* can be done by running

    > g t

### Versions
**1.1.2**
* Added 'inherit' so windows can show color

**1.1.0**
* Added shorthand

**1.0.2**
* Fixed bug where it didn't work on Windows

**1.0.1**
* Updated README with param information

**1.0.0**
* First working commit

