import React from 'react';
import Atelier from '../components/icons/atelier';
import Conference from '../components/icons/conference';
import Debat from '../components/icons/debat';
import Exposition from '../components/icons/exposition';
import Jeu from '../components/icons/jeu';
import Photographie from '../components/icons/photographie';
import Spectacle from '../components/icons/spectacle';
import Video from '../components/icons/video';
import Visite from '../components/icons/visite';

const styles = 'w-4 h-4 text-white';

export const matchFormatIcon = (format) => {
  switch (format) {
    case 'Atelier, animation':
      return <Atelier customClasses={styles} />;
    case 'Conférence':
      return <Conference customClasses={styles} />;
    case 'Débat':
      return <Debat customClasses={styles} />;
    case 'Exposition':
      return <Exposition customClasses={styles} />;
    case 'Jeu':
      return <Jeu customClasses={styles} />;
    case 'Photographie':
      return <Photographie customClasses={styles} />;
    case 'Spectacle':
      return <Spectacle customClasses={styles} />;
    case 'Projection':
      return <Video customClasses={styles} />;
    case 'Visite':
      return <Visite customClasses={styles} />;
    default:
      break;
  }
};
