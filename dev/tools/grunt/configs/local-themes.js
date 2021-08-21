/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';

/**
 * Define Themes
 *
 * area: area, one of (frontend|adminhtml|doc),
 * name: theme name in format Vendor/theme-name,
 * locale: locale,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */
module.exports = {
    blank: {
        area: 'frontend',
        name: 'Magento/blank',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },
    luma: {
        area: 'frontend',
        name: 'Magento/luma',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },
    edible_blooms_theme: {
        area: 'frontend',
        name: 'VaskoTasev/edible_blooms_theme',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/edible_blooms_styles'
        ],
        dsl: 'less'
    },
    edible_blooms_theme_mobile: {
        area: 'frontend',
        name: 'VaskoTasev/edible_blooms_theme_mobile',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/edible_blooms_mobile_styles'
        ],
        dsl: 'less'
    },
    redolent_blooms_theme: {
        area: 'frontend',
        name: 'VaskoTasev/redolent_blooms_theme',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/redolent_blooms_styles'
        ],
        dsl: 'less'
    },
    redolent_blooms_theme_mobile: {
        area: 'frontend',
        name: 'VaskoTasev/redolent_blooms_theme_mobile',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/redolent_blooms_mobile_styles'
        ],
        dsl: 'less'
    },
    backend: {
        area: 'adminhtml',
        name: 'Magento/backend',
        locale: 'en_US',
        files: [
            'css/styles-old',
            'css/styles'
        ],
        dsl: 'less'
    }
};
