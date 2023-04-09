<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */
define('WP_HOME','http://monte.io/');
define('WP_SITEURL','http://monte.io/');

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'monte_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'RootHP123' );

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
define( 'AUTH_KEY',         'y]/6 SvLfvCC9YuAZ61RB4XH;aI:l)bJ/tqC@EP&M/;|Dvu$1peH:YDf`nsJ+0~w' );
define( 'SECURE_AUTH_KEY',  'd^B F4_ax@xdKNvbCUy}6U}FUDIC8NZW]I~849%YCaWTbwFzrs);*#(v1D*AFbnA' );
define( 'LOGGED_IN_KEY',    '!]&y2:MoU2(rB8JGQ[=qEx9Oma{j[K%zo8l/cw=iz=(XnL04xwMKaoAOqRtBTM:O' );
define( 'NONCE_KEY',        '!vI4V{@:ChwL&(n*l^CczGNGC8onKddilt7{UZrI<Stg$mriQ`1v*FB?B>|ZTQsa' );
define( 'AUTH_SALT',        'F5uwPS:&e%,K|Z/~d* Y5|BV?{/AY}C<bh8r1JSwyfd~f&GrF sWM:VzCE*D=IH}' );
define( 'SECURE_AUTH_SALT', '${2YNl}o-^O}_5_9v4.4Za6gV1/qJcal%qHr#o;S-43_(cQ_RfzMdcHhY2/wuJ&l' );
define( 'LOGGED_IN_SALT',   'yg=YwiRd@M}0>@qPs@}?P|1PbiccL,Y5><#R>h/$8Q(hr>u-HAiF9vHTI3C(GixN' );
define( 'NONCE_SALT',       'qOOE*_#jh`GMen<,OQYsAS=>+<:[v;%@ @*Du3jC0oT!~QZ!gM]yzO^2`b)u=& F' );

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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
