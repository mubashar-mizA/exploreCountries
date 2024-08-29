    import React, { useState } from 'react';
    import { IonIcon } from '@ionic/react';
    import { sunnyOutline, moonOutline } from 'ionicons/icons'; // Unfilled icons

    export default function DarkLight() {
        const [isDarkMode, setIsDarkMode] = useState(false);

        const toggleTheme = () => {
            setIsDarkMode(prevMode => !prevMode);
            document.body.classList.toggle('dark', !isDarkMode); // Toggle dark mode on the body element
        };

        return (
            <button  
                onClick={toggleTheme} 
                className='p-2 flex items-center hover:cursor-pointer'
            >
                <IonIcon icon={isDarkMode ? sunnyOutline :  moonOutline} size='large' />
            </button>
        );
    }
