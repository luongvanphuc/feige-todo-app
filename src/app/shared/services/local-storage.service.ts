import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { WindowRef } from './window.service';

@Injectable()
export class LocalStorage {
  private isPlatformBrowser = true;
  private localStorage: Storage;

  constructor(
    @Inject(PLATFORM_ID) public platformId: any,
    private windowRef: WindowRef,
  ) {
    this.isPlatformBrowser = isPlatformBrowser(this.platformId);

    if (this.isPlatformBrowser) {
      this.localStorage = this.windowRef.nativeWindow.localStorage;
    }
  }

  getItem(key: string) {
    const dataStr = this.localStorage?.getItem(key);
    if (dataStr) {
      return JSON.parse(dataStr)?.data;
    }

    return undefined;
  }

  setItem(key: string, value: any) {
    const json = { data: value };
    this.localStorage?.setItem(key, JSON.stringify(json));
  }

  removeItem(key: string) {
    this.localStorage?.removeItem(key);
  }

  clear() {
    this.localStorage?.clear();
  }
}
