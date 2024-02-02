import axios from "axios";
import {ApiClient} from "../ApiClient";

jest.mock('axios');

describe("ApiClient", () => {
    describe("getAlbum()", async () => {
        const apiClient = new ApiClient();
        const albums = await apiClient.getAlbums();
        expect(albums).toBeDefined();
        expect(albums.length).toBe(2);
    })
})