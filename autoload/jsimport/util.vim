" =============================================================================
" File: autoload/jsimport/util.vim
" Author: Billy Vong <billy at mmo.me>
" License: MIT License
" based on original version by Shougo Matsushita <Shougo.Matsu at gmail.com>
" =============================================================================

function! jsimport#util#set_default(var, val, ...)  abort
    if !exists(a:var) || type({a:var}) != type(a:val)
        let alternate_var = get(a:000, 0, '')

        let {a:var} = exists(alternate_var) ?
                    \ {alternate_var} : a:val
    endif
endfunction

function! jsimport#util#print_error(string) abort
    echohl Error | echomsg '[jsimport] ' . a:string | echohl None
endfunction

function! jsimport#util#print_warning(string) abort
    echohl WarningMsg | echomsg '[jsimport] ' . a:string | echohl None
endfunction

function! jsimport#util#neovim_version() abort
    redir => v
    silent version
    redir END
    return split(v, '\n')[0]
endfunction

" vim: tw=120:foldmarker={{{,}}}:foldmethod=marker:
