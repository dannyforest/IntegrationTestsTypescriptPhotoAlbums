export class Album {
    private userId: number;
    private readonly id: number;
    private title: string;
    private static readonly MIN_TITLE_LENGTH = 3;

    constructor(userId: number, id: number, title: string) {
        this.userId = userId;
        this.id = id;
        this.title = title;
    }

    /**
     * Returns the album ID.
     *
     * @returns {number} The ID of the album.
     */
    getId(): number {
        return this.id;
    }

    /**
     * Returns a formatted string containing information about the album.
     *
     * @returns {string} A formatted string containing the album ID, title, and user ID.
     */
    getFormattedInfo(): string {
        return `Album ID: ${this.id}, Title: ${this.title}, User ID: ${this.userId}`;
    }

    /**
     * Checks if the title of an album is valid.
     *
     * @returns {boolean} - A boolean indicating if the title is valid or not.
     */
    isTitleValid(): boolean {
        return this.title.length > Album.MIN_TITLE_LENGTH;
    }

    /**
     * Sets the user ID.
     *
     * @param {number} userId - The ID of the user.
     * @return {void}
     */
    setUserId(userId: number): void {
        this.userId = userId;
    }

    /**
     * Sets the value of the title.
     *
     * @param {string} title - The new title value.
     * @throws {Error} If the title is invalid.
     * @returns {void}
     */
    setTitle(title: string): void {
        if (!this.isTitleValid()) {
            throw new Error('Invalid title');
        }
        this.title = title;
    }

    /**
     * Returns the length of the title.
     *
     * @returns {number} The length of the title.
     */
    getTitleLength(): number {
        return this.title.length;
    }
}