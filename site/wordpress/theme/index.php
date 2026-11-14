<?php
/**
 * Toute adresse qui n'est pas une page du site : page « introuvable » aux couleurs du site.
 */
defined( 'ABSPATH' ) || exit;
mc_render( '404', 404 );
