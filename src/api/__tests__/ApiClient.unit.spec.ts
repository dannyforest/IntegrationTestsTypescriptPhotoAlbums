import {ApiClient} from "../ApiClient";

import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("ApiClient", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    describe("getAlbums()", () => {
        it('should get all albums', async () => {
            fetchMock.mockResponseOnce(JSON.stringify([
                {
                    "userId": 1,
                    "id": 1,
                    "title": "quidem molestiae enim"
                }]));
            const apiClient = new ApiClient();
            const albums = await apiClient.getAlbums();
            expect(albums.length).toBe(1);
        })
    })
})