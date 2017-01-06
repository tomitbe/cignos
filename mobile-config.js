App.info({
    name: 'Animco',
    description: 'NFC tracking',
    author: 'Customweb',
    version: '0.1.1',
    id: 'com.animco.app'
});

App.accessRule('*');
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('*.media.licdn.com/*');

/*
App.icons({
    'iphone': 'resources/icons/Icon-60.png',
    'iphone_2x': 'resources/icons/Icon-60@2x.png',
    'iphone_3x': 'resources/icons/Icon-60@3x.png',
    'ipad': 'resources/icons/Icon-76.png',
    'ipad_2x': 'resources/icons/Icon-76@2x.png'
    //'android_ldpi': 'resources/icons/android_ldpi.png',
    //'android_mdpi': 'resources/icons/android_mdpi.png',
    //'android_hdpi': 'resources/icons/android_hdpi.png',
    //'android_xhdpi': 'resources/icons/android_xhdpi.png'
});

App.launchScreens({
    'iphone': 'resources/splash/320-480.png',
    'iphone_2x': 'resources/splash/320-480.png',
    'iphone5': 'resources/splash/320-568.png',
    'iphone6': 'resources/splash/375-667.png',
    'iphone6p_portrait': 'resources/splash/375-667.png',
    'iphone6p_landscape': 'resources/splash/375-667.png',
    'ipad_portrait': 'resources/splash/ipad_portrait.png',
    'ipad_portrait_2x': 'resources/splash/ipad_portrait2x.png'
    //'ipad_landscape': 'resources/splash/ipad_landscape.png',
    //'ipad_landscape_2x': 'resources/splash/ipad_landscape_2x.png',
    //'android_ldpi_portrait': 'resources/splash/android_ldpi_portrait.png',
    //'android_ldpi_landscape': 'resources/splash/android_ldpi_landscape.png',
    //'android_mdpi_portrait': 'resources/splash/android_mdpi_portrait.png',
    //'android_mdpi_landscape': 'resources/splash/android_mdpi_landscape.png',
    //'android_hdpi_portrait': 'resources/splash/android_hdpi_portrait.png',
    //'android_hdpi_landscape': 'resources/splash/android_hdpi_landscape.png',
    //'android_xhdpi_portrait': 'resources/splash/android_xhdpi_portrait.png',
    //'android_xhdpi_landscape': 'resources/splash/android_xhdpi_landscape.png'
});
*/

App.setPreference('StatusBarOverlaysWebView', true);
App.setPreference('StatusBarStyle', 'default');
App.setPreference('AutoHideSplashScreen' ,'true');