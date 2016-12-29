" ============================================================================
" FILE: plugin/jsimport.vim
" AUTHOR: Billy Vong <billy at mmo.me>
" License: MIT license
" ============================================================================
"
if exists('g:loaded_jsimport')
    finish
endif

function! s:jsimport_lazy_enable()
  autocmd! jsimport_lazy_enable
  augroup! jsimport_lazy_enable
  call jsimport#enable()
endfunction

augroup jsimport_lazy_enable
  autocmd!
  autocmd VimEnter * call s:jsimport_lazy_enable()
augroup END

command! JsImportCache call s:call_cache()

function! s:call_cache() abort
  call jsimport#call('cache')
endfunction

let g:loaded_jsimport=1

