import Config from 'react-native-config';
import path from 'path';

export const getImageUri = (pathname) => path.join(Config.TMDB_IMG_URL,'w780', pathname);