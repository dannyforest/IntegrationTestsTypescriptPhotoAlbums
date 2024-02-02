import {ApiClient} from "../ApiClient";

describe("ApiClient", () => {
    describe("getAlbums()", () => {
        it('should get all albums', async () => {
            const apiClient = new ApiClient();
            const albums = await apiClient.getAlbums();
            expect(albums.length).toBeGreaterThan(0);
        })
    })
})