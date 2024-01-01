import React from 'react';
import Image from 'next/image';
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react';
import nga from '../../public/nga.png';
import tauz from '../../public/playTauz.jpeg';
import plutonio from '../../public/plutonio.jpeg';
import prodigio from '../../public/prodigio.jpeg';
import prodigio2 from '../../public/prodigio2.jpeg';
import vmz from '../../public/vmz1.jpeg';
import vmz2 from '../../public/vmz2.jpeg';

export default function Home() {
  return (
   <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
          <aside className='w-64 bg-zinc-950 p-6'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-red-500 gap-2 rounded-full' />
              <div className='w-3 h-3 bg-yellow-500 gap-2 rounded-full' />
              <div className='w-3 h-3 bg-green-500 gap-2 rounded-full' />
            </div>
             <nav className='space-y-4 mt-6'>
                <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-100'>
                    <HomeIcon/>    
                    Home
                </a>
                <a href=""  className='flex items-center gap-3 text-xs font-semibold text-zinc-100'>
                  <Search/>
                  Pesquisar
                </a>
                <a href=""  className='flex items-center gap-3 text-xs font-semibold text-zinc-100'>
                  <Library/>
                  Sua biblioteca
                </a>
             </nav>

             <nav className='mt-10 pt-5 border-t border-zinc-800 flex flex-col gap-3'>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 1</a>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 2</a>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 3</a>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 4</a>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 5</a>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 6</a>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 7</a>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 8</a>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 9</a>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 10</a>
                <a href="" className='tex-sm text-zinc-400 hover:text-zinc-100'>PlayList 11</a>
             </nav>
          </aside>
          <main className='flex-1 p-6'>
              <div className='flex items-center gap-3'>
                  <button className='p-2rounded-full bg-black/20'>
                      <ChevronLeft/>
                  </button>
                  <button className='p-2rounded-full bg-black/20'>
                      <ChevronRight/>
                  </button>
              </div>
              <h1 className='font-bold text-3xl mt-10'>Boa tarde</h1>

              <div className='grid grid-cols-3 gap-4 mt-4'>
                  <a href='' className='bg-zinc-600 rounded group overflow-hidden hover:bg-zinc-500 flex items-center gap-4 transition-colors'>
                    <Image src={nga} alt='capa' width={104} height={104}/>
                    <strong>NGA</strong>
                    <button className='w-12 h-12 rounded-full flex items-center justify-center pl-2 bg-green-500 text-black mt-3 ml-24 invisible group-hover:visible'>
                          <Play/>
                    </button>
                  </a>
                  <a href='' className='bg-zinc-600 rounded  group overflow-hidden hover:bg-zinc-500 flex items-center gap-4 transition-colors' >
                     <Image src={tauz} alt='capa' className='w-[104px] h-[104px]'/>
                     <strong>Play Tauz</strong>
                     <button className='w-12 h-12 rounded-full flex items-center justify-center pl-2 bg-green-500 text-black mt-3 ml-20 invisible group-hover:visible'>
                          <Play/>
                    </button>
                  </a>
                  <a href='' className='bg-zinc-600 rounded overflow-hidden  hover:bg-zinc-500 flex items-center gap-4 transition-colors'>
                     <Image src={prodigio} alt='capa' className='w-[104px] h-[104px]'/>
                     <strong>Prodigiod</strong>
                     <button className='w-12 h-12 rounded-full flex items-center justify-center pl-2 bg-green-500 text-black mt-3 ml-10 invisible group-hover:visible'>
                        <Play/>
                     </button>
                    
                  </a>
                  <a href='' className='bg-zinc-600 rounded group overflow-hidden hover:bg-zinc-500 flex items-center gap-4 transition-colors'>
                     <Image src={prodigio2} alt='capa' className='w-[104px] h-[104px]'/>
                     <strong>Prodigio</strong>
                     <button className='w-12 h-12 rounded-full flex items-center justify-center pl-2 bg-green-500 text-black mt-3 ml-20 invisible group-hover:visible'>
                          <Play/>
                    </button>
                  </a>
                  <a href='' className='bg-zinc-600 rounded  group overflow-hidden hover:bg-zinc-500 flex items-center gap-4 transition-colors'>
                       <Image src={plutonio} alt='capa' className='w-[104px] h-[104px]'/>
                       <strong>Plutonio</strong>
                       <button className='w-12 h-12 rounded-full flex items-center justify-center pl-2 bg-green-500 text-black mt-3 ml-20 invisible group-hover:visible'>
                          <Play/>
                    </button>
                  </a>
                  <a href='' className='bg-zinc-600 rounded  group overflow-hidden hover:bg-zinc-500 flex items-center gap-4 transition-colors'>
                       <Image src={tauz} alt='capa' className='w-[104px] h-[104px]'/>
                       <strong>Play Tauz</strong>
                       <button className='w-12 h-12 rounded-full flex items-center justify-center pl-2 bg-green-500 text-black mt-3 ml-20 invisible group-hover:visible'>
                          <Play/>
                    </button>
                  </a>
              </div>

              <h2 className='font-semibold text-3xl mt-10'>Feito por Romeu Cajamba</h2>
              
              <div className='grid grid-cols-5 gap-3 mt-4'>
                <div className='bg-zinc-800 group  p-2 flex flex-col gap-2 rounded hover:bg-zinc-700'>
                   <Image src={vmz} alt='capa de album' className='w-[204px] h-[204px]' />

                   <button className='w-10 h-10 absolute rounded-full flex items-center justify-center pl-2 bg-green-500 text-black -mt-32 ml-16 invisible group-hover:visible'>
                          <Play/>
                    </button>

                    <strong className='text-semibold'>Play song</strong>
                    <span className='text-xs text-zinc-500 mb-2'>
                          As melhores músicas a nível mundial e detodadas as culturas
                    </span>
                </div>

                <div className='bg-zinc-800 group flex flex-col gap-2 p-2 rounded hover:bg-zinc-700'>
                   <Image src={vmz} alt='capa de album' className='w-[204px] h-[204px]' />

                   <button className='w-10 h-10 absolute rounded-full flex items-center justify-center pl-2 bg-green-500 text-black -mt-32 ml-16 invisible group-hover:visible'>
                          <Play/>
                    </button>

                    <strong className='text-semibold'>Play song</strong>
                    <span className='text-xs text-zinc-500 mb-2'>
                          As melhores músicas a nível mundial e detodadas as culturas
                    </span>
                </div>

                <div className='bg-zinc-800 group flex flex-col gap-2 p-2 rounded hover:bg-zinc-700'>
                   <Image src={vmz} alt='capa de album' className='w-[204px] h-[204px]' />

                   <button className='w-10 h-10 absolute rounded-full flex items-center justify-center pl-2 bg-green-500 text-black -mt-32 ml-16 invisible group-hover:visible'>
                          <Play/>
                    </button>

                    <strong className='text-semibold'>Play song</strong>
                    <span className='text-xs text-zinc-500 mb-2'>
                          As melhores músicas a nível mundial e detodadas as culturas
                    </span>
                </div>

                <div className='bg-zinc-800 group flex flex-col gap-2 p-2 rounded hover:bg-zinc-700'>
                   <Image src={vmz} alt='capa de album' className='w-[204px] h-[204px]' />

                   <button className='w-10 h-10 absolute rounded-full flex items-center justify-center pl-2 bg-green-500 text-black -mt-32 ml-16 invisible group-hover:visible'>
                          <Play/>
                    </button>

                    <strong className='text-semibold'>Play song</strong>
                    <span className='text-xs text-zinc-500 mb-2'>
                          As melhores músicas a nível mundial e detodadas as culturas
                    </span>
                </div>

                <div className='bg-zinc-800 group flex flex-col gap-2 p-2 rounded hover:bg-zinc-700'>
                   <Image src={vmz} alt='capa de album' className='w-[204px] h-[204px]' />

                   <button className='w-10 h-10 absolute rounded-full flex items-center justify-center pl-2 bg-green-500 text-black -mt-32 ml-16 invisible group-hover:visible'>
                          <Play/>
                    </button>

                    <strong className='text-semibold'>Play song</strong>
                    <span className='text-xs text-zinc-500 mb-2'>
                          As melhores músicas a nível mundial e detodadas as culturas
                    </span>
                </div>
              </div>
          </main>
      </div>
      <footer className='bg-zinc-800  border-t border-zinc700 px-6 pt-4 pb-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
              <Image src={vmz2} alt='musica tocando' className='w-16 h-16'/>
              
              <div className='flex flex-col gap-1'>
                  <strong className='text-regular'>VMZ</strong>
                  <span className='text-xs text-zinc-400'>Seu Harlequeen</span>
              </div>
              <div>
                  <Heart/>
              </div>
          </div>
          <div className='flex flex-col items-center mb-2'>
                <div className='flex items-center gap-4'>
                      <Shuffle/>
                      <SkipBack/>
                      <button className='w-8 h-8 rounded-full bg-white text-black flex items-center justify-center pl-2'>
                          <Play/>
                    </button>

                    <SkipForward/>
                    <Repeat/>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-xs text-zinc-300'>0:31</span>
                  <div className='h-1 rounded-full w-96 bg-zinc-600'>
                    <div className='bg-zinc-200 w-20 h-1 rounded-full'></div>
                  </div>
                  <span className='text-xs text-zinc-300'>4:40</span>
                </div>

          </div>
          <div className='flex items-center gap-2'>
              <Mic2/> 
              <LayoutList/>
              <Laptop2/>
              <div className='flex items-center gap-2'>
                  <Volume/>
                  <div className='h-1 rounded-full w-14 bg-zinc-600'>
                    <div className='bg-zinc-200 w-8 h-1 rounded-full'></div>
                  </div>
              </div>
              <Maximize2/>
          </div>
      </footer>
   </div>
  )}
