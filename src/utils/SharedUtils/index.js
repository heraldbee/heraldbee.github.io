export const localizedPrefix = language => {
    if (language === 'en') {
        return '';
    } else {
        return `/${language}/`
    };
};