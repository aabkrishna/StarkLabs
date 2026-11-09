import type { Metadata } from 'next';
import './globals.css';
import { StoreShell } from '@/components/store-shell';
export const metadata:Metadata={title:{default:'StarkLabs | Engineering the Future',template:'%s | StarkLabs'},description:'Engineering projects, electronic components and innovation kits for curious builders.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreShell>{children}</StoreShell></body></html>}
