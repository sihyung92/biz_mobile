import React from 'react';
import {Alert, Platform} from 'react-native';

export const passwordValidator = password => {
    if (!password || password.length <= 0) {
        const alertTitle = '비밀번호를 입력해주세요.'
        const alertText = '비밀번호를 입력해주세요.'
        AlertAllPlatform(alertText, alertTitle);
        return;
    }
    return true;
};

export const IDValidator = userID => {
    if (!userID || userID.length <= 0) {
        const alertTitle = '아이디를 입력해주세요.'
        const alertText = '아이디를 입력해주세요.'
        AlertAllPlatform(alertText, alertTitle);
        return;
    }
    return true;
};

export const AlertAllPlatform = (alertText, alertTitle) => {
    if (Platform.OS === 'web') {
        alert(alertText);
    } else {
        Alert.alert(alertTitle, alertText);
    }
}