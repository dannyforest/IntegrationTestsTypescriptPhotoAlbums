import { ApiClient } from './api/ApiClient';
import { Album } from './models/Album';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const apiClient = new ApiClient(baseUrl);

apiClient.getAlbums().then(async albums => {
    console.log('Albums:', albums);

    for (const album of albums) {
        console.log(`Fetching photos for albumId: ${album.getId()}`);
        try {
            const photos = await apiClient.getPhotos(album.getId());
            console.log(`Photos for albumId ${album.getId()}:`, photos);
        } catch (error) {
            console.error(`An error occurred while fetching photos for albumId ${album.getId()}:`, error);
        }
    }
}).catch(error => {
    console.error('An error occurred while fetching albums:', error);
});
