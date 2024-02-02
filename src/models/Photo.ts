export class Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;

    constructor(albumId: number, id: number, title: string, url: string, thumbnailUrl: string) {
        this.albumId = albumId;
        this.id = id;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
    }

    /**
     * Retrieves the formatted information of a photo.
     *
     * @return {string} The formatted information of the photo, including its ID, title, and URL.
     */
    getFormattedInfo(): string {
        return `Photo ID: ${this.id}, Title: ${this.title}, URL: ${this.url}`;
    }

    /**
     * Checks if the given URL is valid.
     * @returns {boolean} - true if the URL is valid, false otherwise.
     */
    isValidUrl(): boolean {
        const urlRegex = /^(http|https):\/\/[^ "]+$/;
        return urlRegex.test(this.url);
    }
}