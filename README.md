[![Build Status](https://travis-ci.org/billyvg/jsimport.nvim.svg?branch=master)](https://travis-ci.org/billyvg/jsimport.nvim) [![codecov](https://codecov.io/gh/billyvg/jsimport.nvim/branch/master/graph/badge.svg)](https://codecov.io/gh/billyvg/jsimport.nvim)


# jsimport.nvim (alpha)

jsimport is a NodeJS remote plugin for Neovim that provides autocompletion for javascript imports.
Autocompletion requires [deoplete][1].

## Features
![features](https://raw.githubusercontent.com/billyvg/jsimport.nvim/master/doc/example.gif)

## Installation
Use a plugin manager (vim-plug, Neobundle, dein, etc). `neovim/node-host` requires running `npm install`.
Or manually check out the repo and put the directory to your vim runtime path.

#### vim-plug
```vim
Plug 'billyvg/node-host', { 'do': 'npm install' }
Plug 'billyvg/jsimport.nvim'
```

#### Updating
Update plugins via git or plugin manager (i.e. with `vim-plug`: `:PlugUpdate`). Then `:UpdateRemotePlugins` and finally restart Neovim.

### Prerequisites

  * [Neovim][2]
  * [Node.js][3], [Neovim Node.js host][4]
  * [deoplete][1].

Tested on:

  * macOS 10.11.6, Neovim 0.1.7, Node.js 6.9.x

## How to use
This is in a very early state, so you'll have to manually run this vim command first
in order to generate the source file for deoplete (as well as some context information when finishing an autocomplete)

`:JsImportCache`

After the file is generated, you will be able to autocomplete keywords in `js` and `jsx` files. After the autocomplete finishes
it will also insert an ES6 import at the top of the file. Customization is currently limited.

## Variables
```viml
let g:jsimport#reporting = 1
```
Turns error reporting to [sentry](https://sentry.io) on. Please view source, we try to not collect user information.
This is *opt-in* so if you want to help improve this, please turn it on!

## Debugging
WIP

## Known Issues
[Issues](https://github.com/billyvg/jsimport.nvim/issues)

[1]: https://github.com/Shougo/deoplete.nvim
[2]: https://neovim.io
[3]: https://nodejs.org/en/
[4]: https://github.com/neovim/node-host
