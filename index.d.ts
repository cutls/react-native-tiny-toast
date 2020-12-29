// Type definitions for react-native-tiny-toast 1.0.4
// Project: https://github.com/AdilKhn/react-native-tiny-toast
// Definitions by: cutls <https://github.com/cutls>

import { ViewStyle, TextStyle } from 'react-native'

interface OPTIONS {
    containerStyle?: ViewStyle
    duration?: number
    delay?: number
    animationDuration?: number
    visible?: boolean
    position?: number | POSITION
    animation?: boolean
    shadow?: boolean
    shadowColor?: string
    showText?: boolean
    textColor?: string
    textStyle?: Text.style
    mask?: boolean
    maskColor?: string
    maskStyle?: Viewstyle
    componentAsImg?: TextStyle
    imgSource?: any
    imgStyle?: Image.style
    loading?: boolean
    indicatorSize?: [string, number]
    onHidden?: func
    onMaskPress?: func
}
interface POSITION {
    TOP: number
    CENTER: number
    BOTTOM: number
}
export function show(message: string, options?: OPTIONS): void;
export const position: POSITION