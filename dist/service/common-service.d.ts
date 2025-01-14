export declare const initBaseDelay: (ms?: number) => void;
export declare const logBaseDelay: () => void;
export declare const atatVersion: string;
export declare const waitForTimeout: (millsOrMultplier: number, message?: string) => Promise<void>;
export declare const isEnvEnabled: (envVariable: string) => boolean;
export declare const isDebug: () => boolean;
