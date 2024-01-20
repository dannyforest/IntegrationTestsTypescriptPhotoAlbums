export class Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;

    // Returns the photo's information in a formatted string
    getFormattedInfo(): string {
        return `Photo ID: ${this.id}, Title: ${this.title}, URL: ${this.url}`;
    }

    // Checks if the photo's URL is in a valid format
    isValidUrl(): boolean {
        const urlRegex = /^(http|https):\/\/[^ "]+$/;
        return urlRegex.test(this.url);
    }
}
