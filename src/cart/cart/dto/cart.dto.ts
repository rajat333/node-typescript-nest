export class CreateCartDTO {
    readonly userId: string;
    readonly quantity: number;
    readonly productId: string;
    readonly created_at: Date;
}