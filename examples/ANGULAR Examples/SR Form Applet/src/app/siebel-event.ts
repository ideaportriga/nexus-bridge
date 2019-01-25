export class SiebelEvent {
    constructor(public name?: string) {}

    isBlank() {
        return !!name;
    }
}