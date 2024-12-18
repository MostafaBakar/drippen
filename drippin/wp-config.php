<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'drippin' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$Jyh.A^A_kL-sEGj0_S5d3y`(z(6U7,FPF8v||8{o?5F/Ccj=[)B~L<-Zv&g!I=b' );
define( 'SECURE_AUTH_KEY',  ':J[4!c*^BVu1Pc{Ipw)WzBRc}7v^l^2diTy/;.QUt4_N!lfsUZa#Q(Oq=okZ^Pq`' );
define( 'LOGGED_IN_KEY',    'q|qFB/7#kVi4?+8AY%0H&ligyO _jSDM4W{c^EZ*VXj]{Iw9>z/Gmd<QSy?_ vJi' );
define( 'NONCE_KEY',        '9$j]byDogRugz}##+oFTX$O43al:>VU%wK b[S=kS41{Dy3*4;>sKbvLoR!0lwz^' );
define( 'AUTH_SALT',        'l[z)9[}oh<D:bje#>{~6`ne {A+yoEBF,uzb.?/)SR5}^z=rM!O3l_:B[B(*Wg!P' );
define( 'SECURE_AUTH_SALT', ',D]DSvP1z~~]@/p^V}C,8[/)k%k8^RT54=-5)bkX`{N>QTy=mkQz!CM_K`L|QAyF' );
define( 'LOGGED_IN_SALT',   'ZN;e.O;[8PZ:OOYDQE([hK0YfBDmIPK%*Ti=L:k*eEgl{gtrewe8X*F{r% ~`gUl' );
define( 'NONCE_SALT',       'sW]=)bDt1)nz?HmEa]-~.%vXCeZ&0u<Z(HTw)i4S-mM)nCsr-(?~_$:{=.WWbIGk' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
