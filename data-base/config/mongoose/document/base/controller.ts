export abstract class Controller {

    public abstract create(request, response, next): void;
    public abstract read(): void;
    public abstract update(): void;
    public abstract delete(): void;

}