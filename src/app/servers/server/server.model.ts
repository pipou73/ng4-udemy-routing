export class Server {
    public id: number;
    public name: string;
    public status: string;

    constructor(id, name, status) {
        this.id  = id;
        this.name = name;
        this.status = status;
    }
}