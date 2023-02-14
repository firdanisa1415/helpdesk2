import Cookies from "js-cookie";

export default class CookieHandler {
  constructor() {}
  /**
   * Store multiple cookies.
   *
   * @param {Object} cookieObject - An object with keys and values to store as cookies.
   * @param {Object} [options={}] - An object of options for the cookies.
   */
  store(cookieObject, options = {}) {
    for (const [key, value] of Object.entries(cookieObject)) {
      Cookies.set(key, value, options);
    }
  }
  /**
   * Remove a single cookie.
   *
   * @param {string} cookieKey - The key of the cookie to remove.
   * @param {Object} [options={}] - An object of options for the cookies.
   */
  remove(cookieKey, options = {}) {
    Cookies.remove(cookieKey, options);
  }
  /**
   * @param {string[]} keys - The keys for the cookies to be deleted.
   */
  deleteMultiple(keys) {
    keys.forEach((key) => {
      this.remove(key);
    });
  }
  /**
   * Get the value of a single cookie.
   *
   * @param {string} cookieKey - The key of the cookie to retrieve.
   * @return {string | undefined} - The value of the cookie, or undefined if the cookie does not exist.
   */
  get(cookieKey) {
    return Cookies.get(cookieKey);
  }
}
