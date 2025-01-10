// İşlem fonksiyonu
function startProcess() {
    console.log("İşlem başlatılıyor...");

    // Input elementini XPath ile bulma
    const inputElement = document.evaluate(
            "//*[@class='whsOnd zHQkBf']",
            document,
            null,
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            null
            ).snapshotItem(2);

    if (inputElement) {
        // Input elementini tıklayıp değer atama
        inputElement.click();
        inputElement.value = "https://siteurl.com.tr/sitemap.xml";

        // Değer değişikliği event tetikleme
        const event = new Event("input", {bubbles: true});
        inputElement.dispatchEvent(event);

        console.log("Input elementi başarıyla dolduruldu.");
    } else {
        console.error("Input elementi bulunamadı!");
    }

    // Butonu bul ve tıkla
    const buttonElement = document.querySelector(
            'div[role="button"].U26fgb.O0WRkf.zZhnYe.e3Duub.C0oVfc.zaJEjb.M9Bg4d'
            );

    if (buttonElement) {
        // Butona tıklama simülasyonu
        buttonElement.click();
        console.log("Buton başarıyla tıklandı.");
    } else {
        console.error("Buton elementi bulunamadı!");
    }

    // İşlem tamamlandıktan sonra bayrağı temizle
    localStorage.removeItem("redirected");
}

// URL kontrolü ekle
if (window.location.href.includes("https://search.google.com/search-console/sitemaps?resource_id=")) {
    startProcess();
} else {
    window.location.href = "https://search.google.com/search-console/sitemaps?resource_id=siteurl";
}
