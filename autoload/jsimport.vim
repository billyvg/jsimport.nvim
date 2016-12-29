" =============================================================================
" File: autoload/jsimport.vim
" Author: Billy Vong <billy at mmo.me>
" License: MIT License
" =============================================================================

function! jsimport#initialize() abort
    return jsimport#init#_initialize()
endfunction

function! jsimport#enable() abort
    if jsimport#initialize()
        return 1
    endif
    return jsimport#init#_enable()
endfunction

function! jsimport#disable() abort
    return jsimport#init#_disable()
endfunction

function! jsimport#toggle() abort
    return jsimport#init#_is_enabled() ? jsimport#disable() : jsimport#enable()
endfunction

function! jsimport#call(name, ...) abort
  if exists('g:jsimport#_channel_id')
    try
      call call('_jsimport_' . a:name, a:000)
    catch /^Vim\%((\a\+)\)\=:E475/
      call jsimport#util#print_error(
            \ 'jsimport.nvim has crashed, neovim probably needs to be restarted.')
      call jsimport#disable()
      return 1
    catch
      call jsimport#util#print_error(
            \ 'jsimport.nvim has crashed, neovim probably needs to be restarted.')
      call jsimport#disable()
      return 1
    endtry
  else
    call jsimport#util#print_error(
          \ 'jsimport.nvim has either crashed or not started, try restarting neovim.')
    return 1

  endif
endfunction
