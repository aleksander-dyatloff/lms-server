const log = {
  getTime() {
    const currentTime = new Date();

    return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  },

  info(info: any) {
    if (typeof info === 'object') info = JSON.stringify(info, null, 2);

    console.log('\x1b[36m', `${this.getTime()} - ${info}`);
  },
};

export default log;
