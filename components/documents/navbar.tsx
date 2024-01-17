'use client'

import type { Id } from '@/convex/_generated/dataModel'

import { useParams } from 'next/navigation'
import { useQuery } from 'convex/react'
import { MenuIcon } from 'lucide-react'

import { api } from '@/convex/_generated/api'
import { Title } from '@/components/documents/title'
import { Banner } from '@/components/documents/banner'
import { Menu } from '@/components/documents/menu'
import { Publish } from '@/components/documents/publish'

interface NavbarProps {
  isCollapsed: boolean
  onResetWidth: () => void
}

export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  const params = useParams()

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<'documents'>,
  })

  if (document === undefined) {
    return (
      <nav className="bg-background px-3 py-2 w-full flex items-center">
        <Title.Skeleton />
      </nav>
    )
  }

  if (document === null) {
    return null
  }

  return (
    <>
      <nav className="bg-background px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="h-6 w-6 text-muted-foreground"
          />
        )}
        <div className="flex items-center justify-between w-full">
          <Title initialData={document} />
          {!document.isArchived && (
            <div className="flex items-center gap-x-2">
              <Publish initialData={document} />
              <Menu documentId={document._id} />
            </div>
          )}
        </div>
      </nav>
      {document.isArchived && <Banner documentId={document._id} />}
    </>
  )
}
