export class Album {
    userId: number;
    id: number;
    title: string;

    // Returns the album's information in a formatted string
    getFormattedInfo(): string {
        return `Album ID: ${this.id}, Title: ${this.title}, User ID: ${this.userId}`;
    }

    // Example method: Checks if the album title meets certain length criteria
    isTitleValid(): boolean {
        return this.title.length > 3; // Example condition
    }
}