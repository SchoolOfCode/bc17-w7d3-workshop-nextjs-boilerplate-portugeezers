import Link from 'next/link'
export default function Header() {
    return (
        <>
            <header className="site-header">
                <h1>🔥 Fireplace Palace</h1>
                      <Link href="/founders">Menu</Link>
             </header>
        </>
    )    
}