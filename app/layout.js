import dynamic from 'next/dynamic';
// Dynamically import the Route component
const Route = dynamic(() => import('@/utils/Route'));
import './globals.css';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Route>{children}</Route>
      </body>
    </html>
  );
}
