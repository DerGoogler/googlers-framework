export interface INative<T = any> {
  getInterface: T;
}

/**
 * Core functions for native functions/interfaces
 * Requires `interface` and `userAgent` to be declared
 */
export class Native<T = any> implements INative<T> {
  public readonly isCordova = window.hasOwnProperty("cordova");
  public userAgent: string;
  public interface: string;

  public constructor() {
    this.userAgent = "";
    this.interface = "";
  }

  /**
   * Checks if the native interface is supported
   * @returns {boolean}
   */
  public get isNative(): boolean {
    return window.hasOwnProperty(this.interface);
  }

  /**
   * @returns The native interface with thier functions
   */
  public get getInterface(): T {
    if (this.isNative) {
      return (window[this.interface as any] as unknown) as T;
    } else {
      return undefined as any;
    }
  }
}
