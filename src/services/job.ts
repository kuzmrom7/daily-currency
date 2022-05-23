import config from "../config";

export function startInterval(cb: Function) {
  cb();
  setInterval(() => {
    cb();
  }, config.JOBS_INTERVAL);
}
