import {ApiClient} from "../ApiClient";

jest.mock('axios');

describe("ApiClient", () => {
    describe("getAlbums()", () => {
        it ('should get all albums', async () => {
            const apiClient = new ApiClient();
            const albums = await apiClient.getAlbums();
            expect(albums).toBeDefined();
            expect(albums.length).toBeGreaterThan(0);
        })
    })
})