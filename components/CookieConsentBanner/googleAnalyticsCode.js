function googleAnalytics() {
    //console.log("Triggered Google Analytics");
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
  
  export default googleAnalytics;