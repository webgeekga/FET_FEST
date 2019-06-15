import { PinData } from './pinData';

export interface Pin {
    name: string;
    msgtype: number;
    data: PinData;
    result?: number;
}