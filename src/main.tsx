import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/main.css'
import { NavigatorApp } from './NaviApp'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NavigatorApp />
    </StrictMode>,
)
