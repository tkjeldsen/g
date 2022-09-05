/* tslint:disable */
/* eslint-disable */
/**
* @param {string} source
* @param {string} stage
* @param {boolean} validation_enabled
* @returns {string}
*/
export function glsl_compile(source: string, stage: string, validation_enabled: boolean): string;
/**
* @param {Uint8Array} source
* @param {boolean} validation_enabled
* @returns {string}
*/
export function spv_compile(source: Uint8Array, validation_enabled: boolean): string;
