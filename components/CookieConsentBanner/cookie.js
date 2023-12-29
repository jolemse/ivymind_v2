export const getCookies = () => {
    //Wird aktuell nicht verwendet
    const cookies = document.cookie.split('; ');
    const cookieMap = {};

    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        cookieMap[name] = decodeURIComponent(value);
    }

    return cookieMap;
}

export const setCookies = (name, value, daysToExpire) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    const cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/';
    document.cookie = name + '=' + cookieValue;

}
