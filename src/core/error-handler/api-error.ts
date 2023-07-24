export class ApiError extends Error {
  constructor(
    protected messageCustom?: string,
    public name = 'Unknown Error',
    public status: number = -1,
    protected readonly messageDefault = 'Erro desconhecido'
  ) {
    super(name);
  }

  get getMessage(): string {
    return this.messageCustom ?? this.messageDefault;
  }
}
