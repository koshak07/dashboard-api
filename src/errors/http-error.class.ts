export class HTTPError extends Error {
  statusCode: number;
  cotext?: string;
  constructor(statusCode: number, message: string, context?: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.cotext = context;
  }
}
