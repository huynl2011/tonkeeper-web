/* tslint:disable */
/* eslint-disable */
/**
 * Tonkeeper TWA API.
 * REST API for Tonkeeper TWA.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetTonConnectPayloadDefaultResponse
 */
export interface GetTonConnectPayloadDefaultResponse {
    /**
     * 
     * @type {string}
     * @memberof GetTonConnectPayloadDefaultResponse
     */
    error: string;
}

/**
 * Check if a given object implements the GetTonConnectPayloadDefaultResponse interface.
 */
export function instanceOfGetTonConnectPayloadDefaultResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "error" in value;

    return isInstance;
}

export function GetTonConnectPayloadDefaultResponseFromJSON(json: any): GetTonConnectPayloadDefaultResponse {
    return GetTonConnectPayloadDefaultResponseFromJSONTyped(json, false);
}

export function GetTonConnectPayloadDefaultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTonConnectPayloadDefaultResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': json['error'],
    };
}

export function GetTonConnectPayloadDefaultResponseToJSON(value?: GetTonConnectPayloadDefaultResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
    };
}

