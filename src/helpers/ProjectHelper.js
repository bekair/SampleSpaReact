export const getLanguageComboBoxOptions = (locale) => {
    if (locale === "tr") {
        return [
            { value: "tr", name: "Türkçe" },
            { value: "en-US", name: "İngilizce" }
        ];
    }
    else {
        return [
            { value: "en-US", name: "English" },
            { value: "tr", name: "Turkish" }
        ];
    }
}

export const getCountryComboBoxOptions = (locale) => {
    if (locale === "tr") {
        return [
            { value: "TR", name: "Türkiye" },
            { value: "US", name: "Amerika" },
            { value: "GB", name: "İngiltere" },
            { value: "DE", name: "Almanya" },
            { value: "SE", name: "İsveç" },
            { value: "KE", name: "Kenya" },
            { value: "BR", name: "Brezilya" },
            { value: "ZW", name: "Zimbabve" }
        ];
    }
    else {
        return [
            { value: "TR", name: "Turkey" },
            { value: "US", name: "United States of America" },
            { value: "GB", name: "United Kingdom" },
            { value: "DE", name: "Germany" },
            { value: "SE", name: "Sweden" },
            { value: "KE", name: "Kenya" },
            { value: "BR", name: "Brazil" },
            { value: "ZW", name: "Zimbabwe" }
        ];
    }
}