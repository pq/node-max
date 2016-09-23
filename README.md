# node-max
Jumping off point for debugging max JS patches w/ node.


## Basics

Inspired by a conversation on the [llllllll forum](http://llllllll.co/t/debugging-max-js-patches-node-js/4666),
a few starter files to help jump-start using `node.js` to debug and test
your Max/MSP Javascript bits.

Included here are:

* `max.js` - a sample file with a few maxisms (a stand-in for your real code) that
  defines a nodule module exporting functions to test drive.
* `driver.js` - the driver.  This defines a sandbox from which you test drive functions
  exported by the module defined in the `max.js` file.

## Getting Started

### Preliminaries

This assumes you've got [`node.js`](https://nodejs.org/) installed and some environment in which you
can debug node apps.  (The [Node.js Applications with VS Code](https://code.visualstudio.com/docs/runtimes/nodejs) tutorial
is great if you want to give [vscode](https://code.visualstudio.com/) a whirl.)

### The Recipe

1. grab the sources (`git clone https://github.com/pq/node-max.git`).
1. copy `driver.js` into your project directory.
1. update the JS file(s) you want to test to define modules that export functions
   of interest.
1. import these modules into `driver.js` (e.g., update `require('./max')`
   to specify your module and repeat as needed).
1. add a call to one of your functions to the sandbox area of `driver.js` (e.g.,
   like `max.bang()` in the template).
1. set a breakpoint.
1. create a `launch.json` configuration file that specifies `driver.js` as its
   program (maybe like `"program": "${workspaceRoot}/driver.js"`).
1. run!


## Next Steps

This is basically a lark.  If it ends up being useful, I'll add more bits (more Max
functions in particular).  If you have interest, feel free to file an [issue](https://github.com/pq/node-max/issues)
or better still, submit a pull request!
