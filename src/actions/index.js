import {CLICK_UPDATE_VALUE} from './actionTypes';

export const clickButton = value => {
    return {
        type: 'CLICK_UPDATE_VALUE',
        newValue: value
    }
}