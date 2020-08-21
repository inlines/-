import { InjectionToken } from '@angular/core';

/**
 * token to provide host for http-request
 */
export const LocalStorageKey = new InjectionToken<string>('LocalStorageKey');