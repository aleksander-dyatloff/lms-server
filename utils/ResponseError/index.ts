class ResponseError {
  code = 500;

  message = 'Server error';

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }
}

export default ResponseError;
