/**
 * themes -  sets up themes for light and dark modes based on the user's system preference (prefers-color-scheme).
 * The chosen theme is then applied to the document's root element.
 * @type {{light: string, dark: string}}
 */
export const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

export const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

/**
 * Function responsible for applying user settings to your application.
 * @param userSettings
 */
export function applyUserSettings (userSettings) {

    const theme = userSettings.theme;
    document.documentElement.style.setProperty('--color-dark', theme === 'night' ? night.dark : day.dark);
    document.documentElement.style.setProperty('--color-light', theme === 'night' ? night.light : day.light);
}
// Set the default theme to 'day'
export const defaultTheme = 'day';
applyUserSettings({ theme: defaultTheme });