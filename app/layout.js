export const metadata = {
  title: 'CAD Training Institute - UGC Reel Script',
  description: 'Professional UGC advertisement script for CAD training',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
