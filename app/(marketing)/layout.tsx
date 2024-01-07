import { Navbar } from '@/components/marketing/navbar'

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-white text-zinc-950">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  )
}

export default MarketingLayout
