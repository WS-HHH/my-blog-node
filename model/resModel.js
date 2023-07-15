class BaseModel {
  constructor({ errCode, data, message }) {
    this.errCode = errCode;

    if (data) {
      this.data = data;
    }

    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({
      errCode: 0,
      data,
    })
  }
}

class ErrorModel extends BaseModel {
  constructor(data = {}) {
    super({
      errCode,
      message,
    })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
}