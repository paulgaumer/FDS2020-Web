import React, { useState, useEffect } from 'react';
import { hasWindow } from '../../utils/hasWindow';
// Need to require conditionally to avoid a missing "document" error during SSR
const PWAPrompt = hasWindow ? require('react-ios-pwa-prompt') : null;

const IosPwaPrompt = () => {
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);

  useEffect(() => {
    if (hasWindow) {
      setIsWindowLoaded(true);
    }
  }, []);

  if (isWindowLoaded) {
    return (
      <PWAPrompt
        delay={20000}
        copyTitle="Télécharger l'app"
        copyBody="Ce site peut être utilisé comme une app. Ajoutez le à votre écran d'accueil pour l'utiliser en mode plein écran et hors-ligne."
        copyShareButtonLabel="1) Appuyez sur l'icône 'Partager'"
        copyAddHomeButtonLabel="2) Appuyez sur 'Sur l'écran d'accueil'"
        copyClosePrompt="Fermer"
        // debug={true}
      />
    );
  } else {
    return <div className="hidden" />;
  }
};

export default IosPwaPrompt;
