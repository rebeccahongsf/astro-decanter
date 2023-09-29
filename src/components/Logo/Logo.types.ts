import * as styles from './Logo.styles'

/**
 * Colors types.
 */
export type LogoColorType = keyof typeof styles.logoColors;

/**
 * The three different logo types.
 */
export type LogoType = 'short' | 'full' | 'stacked';