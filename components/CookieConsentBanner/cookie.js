import Script from 'next/script';

export const getCookies = () => {
  const cookies = document.cookie.split('; ');
  const cookieMap = {};

  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    cookieMap[name] = decodeURIComponent(value);
  }

  return cookieMap;
};

export const setCookies = (name, value, daysToExpire) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  const cookieValue =
    encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/';
  document.cookie = name + '=' + cookieValue;
  //console.log("entered setCookies: Set Value ", name + '=' + cookieValue);
};

export function googleAnalytics() {
  console.log("Triggered Google Analytics");
  return (
    <div className="container">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JZWQETF6NE" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-JZWQETF6NE');
          `}
      </Script>
    </div>
  );
}
