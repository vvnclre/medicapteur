<?php
/**
 * Thème Medicapteurs.
 *
 * Les pages du site sont des fichiers PHP du dossier pages/ (fr/…, en/…).
 * Quand une adresse correspond à l'un d'eux, le thème l'affiche ; sinon
 * WordPress continue normalement (articles, pages créées dans l'administration, 404).
 */

defined( 'ABSPATH' ) || exit;

define( 'MC_URI', get_template_directory_uri() );
define( 'MC_HOME', untrailingslashit( home_url() ) );
define( 'MC_PAGES', get_template_directory() . '/pages/' );

/** Chemin demandé, sans le dossier d'installation de WordPress : « fr/gamme ». */
function mc_request_path() {
	$path = wp_parse_url( isset( $_SERVER['REQUEST_URI'] ) ? wp_unslash( $_SERVER['REQUEST_URI'] ) : '/', PHP_URL_PATH );
	$path = $path ? rawurldecode( $path ) : '/';
	$base = wp_parse_url( home_url( '/' ), PHP_URL_PATH );
	$base = $base ? $base : '/';
	if ( 0 === strpos( $path, $base ) ) {
		$path = substr( $path, strlen( $base ) );
	}
	return trim( $path, '/' );
}

/** Affiche une page du site et arrête WordPress. */
function mc_render( $key, $status = 200 ) {
	status_header( $status );
	header( 'Content-Type: text/html; charset=utf-8' );
	include MC_PAGES . $key . '.php';
	exit;
}

add_action(
	'template_redirect',
	function () {
		if ( is_admin() ) {
			return;
		}
		$path = mc_request_path();

		// Adresse racine : français ou anglais selon la langue du navigateur.
		if ( '' === $path ) {
			$accept = isset( $_SERVER['HTTP_ACCEPT_LANGUAGE'] ) ? strtolower( substr( sanitize_text_field( wp_unslash( $_SERVER['HTTP_ACCEPT_LANGUAGE'] ) ), 0, 2 ) ) : 'fr';
			$lang   = ( '' === $accept || 'fr' === $accept ) ? 'fr' : 'en';
			wp_safe_redirect( home_url( '/' . $lang . '/' ), 302 );
			exit;
		}

		// Seules les adresses du site sont prises en charge : lettres, chiffres, tirets.
		if ( ! preg_match( '#^(fr|en)(/[a-z0-9-]+){0,2}$#', $path ) ) {
			return;
		}
		$key = in_array( $path, array( 'fr', 'en' ), true ) ? $path . '/index' : $path;
		if ( ! is_file( MC_PAGES . $key . '.php' ) ) {
			return;
		}

		// Adresse sans barre finale : redirection vers l'adresse officielle.
		$requested = wp_parse_url( isset( $_SERVER['REQUEST_URI'] ) ? wp_unslash( $_SERVER['REQUEST_URI'] ) : '', PHP_URL_PATH );
		if ( $requested && '/' !== substr( $requested, -1 ) ) {
			wp_safe_redirect( home_url( '/' . $path . '/' ), 301 );
			exit;
		}

		mc_render( $key );
	},
	1
);

// Le thème écrit lui-même le titre de chaque page : WordPress n'en ajoute pas.
remove_action( 'wp_head', 'wp_generator' );
