'use client'

import { useState, useEffect } from 'react'

import { CoverImageModal } from '@/components/modals/cover-image-modal'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <CoverImageModal />
}
