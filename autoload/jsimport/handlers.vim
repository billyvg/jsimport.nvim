" =============================================================================
" File: autoload/jsimport/handlers.vim
" Author: Billy Vong <billy at mmo.me>
" License: MIT License
" based on original version by Shougo Matsushita <Shougo.Matsu at gmail.com>
" =============================================================================

function! jsimport#handlers#_init() abort
  augroup jsimport
    autocmd!

    autocmd CompleteDone * call s:complete_done(expand('<amatch>'))
  augroup END
endfunction

function! s:complete_done(file) abort
  try
    call jsimport#call('complete_done', a:file)
  endtry
endfunction

