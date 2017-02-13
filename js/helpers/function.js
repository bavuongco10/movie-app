import Config from 'react-native-config';
import path from 'path';

// width will be w780 or w185
export const getImageUri = (pathname, width) => pathname ? path.join(Config.TMDB_IMG_URL, width, pathname) : null;