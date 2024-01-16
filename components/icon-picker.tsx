'use client'

import EmojiPicker, { Theme } from 'emoji-picker-react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface IconPickerProps {
  children: React.ReactNode
  onChange: (icon: string) => void
  asChild?: boolean
}

export const IconPicker = ({
  children,
  onChange,
  asChild,
}: IconPickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent className="p-0 w-full border-none shadow-none">
        <EmojiPicker
          height={350}
          onEmojiClick={(data) => onChange(data.emoji)}
        />
      </PopoverContent>
    </Popover>
  )
}
