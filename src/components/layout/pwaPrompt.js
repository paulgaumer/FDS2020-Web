import React, { useState, useEffect } from 'react';
import PWAPrompt from 'react-ios-pwa-prompt';
import { hasWindow } from '../../utils/hasWindow';

const IosPwaPrompt = () => {
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);

  useEffect(() => {
    if (hasWindow) {
      setIsWindowLoaded(true);
    }
  }, []);

  return isWindowLoaded ? (
    <PWAPrompt
      delay={20000}
      copyTitle="Télécharger l'app"
      copyBody="Ce site peut être utilisé comme une app. Ajoutez le à votre écran d'accueil pour l'utiliser en modes plein écran et hors-ligne."
      copyShareButtonLabel="1) Appuyez sur l'icône 'Partager'"
      copyAddHomeButtonLabel="2) Appuyez sur 'Sur l'écran d'accueil'"
      copyClosePrompt="Fermer"
      debug={true}
    />
  ) : (
    <div className="hidden" />
  );
};

export default IosPwaPrompt;
