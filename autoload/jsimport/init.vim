" =============================================================================
" File: autoload/jsimport/init.vim
" Author: Billy Vong <billy at mmo.me>
" License: MIT License
" based on original version by Shougo Matsushita <Shougo.Matsu at gmail.com>
" =============================================================================

if !exists('s:is_enabled')
  let s:is_enabled = 0
endif

function! jsimport#init#_is_enabled() abort
  return s:is_enabled
endfunction

function! s:is_initialized() abort
  return exists('g:jsimport#_channel_id')
endfunction

function! jsimport#init#_initialize() abort
  if s:is_initialized()
    return
  endif

  augroup jsimport
    autocmd!
  augroup END

  if jsimport#init#_channel()
    return 1
  endif

  call jsimport#init#_variables()
endfunction

function! jsimport#init#_channel() abort
  if !has('nvim') || !has('python3')
    call deoplete#util#print_error(
          \ 'jsimport.nvim requires neovim with python3 support')
    return 1
  endif

  try
    if !exists('g:loaded_remote_plugins')
      runtime! plugin/rplugin.vim
    endif
    call _jsimport_load()
  catch
    call deoplete#util#print_error(printf(
          \ 'jsimport failed to load: %s. '
          \ .'Try the :UpdateRemotePlugins command and restart Neovim. '
          \ .'See also :CheckHealth.',
          \ v:exception))
    return 1
  endtry

  " let s:is_enabled = g:jsimport#enable_at_startup
  let s:is_enabled = 1
  if s:is_enabled
    call jsimport#init#_enable()
  else
    call jsimport#init#_disable()
  endif
endfunction

function! jsimport#init#_enable() abort
  call jsimport#handlers#_init()
  let s:is_enabled = 1
  " if get(g:, 'jsimport#debug', 0) "{{{
  " call jsimport#enable_logging('DEBUG', 'jsimport.log')
  " endif "}}}

endfunction

function! jsimport#init#_disable() abort
  augroup jsimport
    autocmd!
  augroup END
  let s:is_enabled = 0
  unlet g:jsimport#_channel_id
endfunction

function! jsimport#init#_variables() abort
  " User variables
  call jsimport#util#set_default('g:jsimport#debug', 0)
  call jsimport#util#set_default('g:jsimport#reporting', 0)
endfunction

