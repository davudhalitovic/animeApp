import axios from 'axios';

const API_URL = 'https://kitsu.io/api/edge';

const instance = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.api+json',
    },
  });
  
  export async function fetchTrendingAnime() {
    try {
      const response = await instance.get('/trending/anime', {
        params: {
          page: {
          },
        },
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch trending anime:', error);
      throw error;
    }
  }

export async function AnimeApi() {
  try {
    const response = await axios.get('https://kitsu.io/api/edge/anime', {
      headers: {
        Accept: 'application/vnd.api+json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Fetch failed for anime data:', error);
    throw error; 
  }
}

export async function fetchAdventureAnime() {
  try {
    const response = await instance.get('/anime', {
      params: {
        'filter[genres]': 'adventure',
        'sort': '-user_count', 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch adventure anime:', error);
    throw error;
  }
}
export async function fetchRomanceAnime() {
  try {
    const response = await instance.get('/anime', {
      params: {
        'filter[genres]': 'romance',
        'sort': '-user_count', 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch romance anime:', error);
    throw error;
  }
}
export async function fetchHorrorAnime() {
  try {
    const response = await instance.get('/anime', {
      params: {
        'filter[genres]': 'horror',
        'sort': '-user_count', 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch horror anime:', error);
    throw error;
  }
}


export async function MangaApi() {
  try {
    const response = await axios.get('https://kitsu.io/api/edge/manga', {
      headers: {
        Accept: 'application/vnd.api+json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Fetch failed for manga data:', error);
    throw error; 
  }
}
export async function fetchAdventureManga() {
  try {
    const response = await instance.get('/manga', {
      params: {
        'filter[genres]': 'adventure',
        'sort': '-user_count', 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch adventure manga:', error);
    throw error;
  }
}
export async function fetchActionManga() {
  try {
    const response = await instance.get('/manga', {
      params: {
        'filter[genres]': 'action',
        'sort': '-user_count', 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch action manga:', error);
    throw error;
  }
}