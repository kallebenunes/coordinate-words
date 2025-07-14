import { create } from 'zustand'

interface BoardStore {
  isChosingWord: boolean
  setIsChosingWord: (isChosingWord: boolean) => void
  setSelectedWord: (word: SelectedWord) => void
  selectedWord: SelectedWord
}

interface SelectedWord {
  word: string
  position: string
  id: string
}

export const useBoardStore = create<BoardStore>((set) => ({
  isChosingWord: false,
  selectedWord: {
    word: '',
    position: '',
    id: ''  
  },
  setSelectedWord: (selectedWord: SelectedWord) => set({ selectedWord }),
  setIsChosingWord: (isChosingWord: boolean) => set({ isChosingWord }),
}))
