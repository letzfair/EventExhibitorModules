(() => {
    const lfEspositoriConfig = {
        manifestazioneId: { INSTANCE MANIFESTATION ID },
        lang: "en", // Remove to use browser language
        baseUrl: "https://{ INSTANCE DOMAIN }",
        backgroundColor: "#fff",
        textColor: "#000",
        mainColor: "#f00",
        menuPadding: "30px", // If the website has a fixed/sticky menu, this value should be equal to the height of your menu
    };

    const loadScript = (url) => new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = () => resolve(url);
        script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
        document.body.appendChild(script);
    });

    loadScript(`${lfEspositoriConfig.baseUrl}/assets/js/frammento-espositori.js`)
        .then(url => console.log(`Script loaded successfully: ${url}`))
        .catch(err => console.error(err.message));
})();