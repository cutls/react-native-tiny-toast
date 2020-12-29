// Type definitions for react-native-tiny-toast 1.0.4
// Project: https://github.com/AdilKhn/react-native-tiny-toast
// Definitions by: cutls <https://github.com/cutls>

import { ViewStyle, TextStyle, ImageSourcePropType, ImageStyle } from 'react-native'
import RootSiblings from 'react-native-root-siblings'

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
    textStyle?: TextStyle
    mask?: boolean
    maskColor?: string
    maskStyle?: ViewStyle
    imgSource?: ImageSourcePropType
    imgStyle?: ImageStyle
    loading?: boolean
    indicatorSize?: [string, number]
    onHidden?: FUNCTION
    onMaskPress?: FUNCTION
}
interface FUNCTION {
    (): void
}
interface POSITION {
    TOP: number
    CENTER: number
    BOTTOM: number
}

export function show(message: string, options?: OPTIONS): RootSiblings
export function showSuccess(message: string, options?: OPTIONS): RootSiblings
export function showLoading(message: string, options?: OPTIONS): RootSiblings
export function hide(toast?: RootSiblings): void
export const position: POSITION