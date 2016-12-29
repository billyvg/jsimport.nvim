# jsimport.nvim (alpha)

jsimport is a NodeJS remote plugin for Neovim that provides autocompletion for javascript imports.
Autocompletion requires [deoplete][1].

## Features

## Prerequisites

  * [Neovim][2]
  * [Node.js][3], [Neovim Node.js host][4]
  * [deoplete][1].

Tested on:

  * macOS 10.11.6, Neovim 0.1.7, Node.js 6.9.x

## Installation

### Install Vim Plugins

Use a plugin manager (vim-plug, Neobundle, dein, etc). `neovim/node-host` requires running `npm install`.

#### vim-plug
```vim
Plug 'billyvg/node-host', { 'do': 'npm install' }
Plug 'billyvg/jsimport.nvim'
```

#### dein
```vim
call dein#add('billyvg/node-host', { 'build': 'npm install' })
call dein#add('billyvg/jsimport.nvim')
```

Or manually check out the repo and put the directory to your vim runtime path.

## Updating
Update plugins via git or plugin manager (i.e. with `vim-plug`: `:PlugUpdate`). Then `:UpdateRemotePlugins` and finally restart Neovim.

## How to use
WIP

### Debugging
WIP

## Known Issues
WIP

[1]: https://github.com/Shougo/deoplete.nvim
[2]: https://neovim.io
[3]: https://nodejs.org/en/
[4]: https://github.com/neovim/node-host
