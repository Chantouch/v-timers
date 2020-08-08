import _Vue from "vue";

export default class VTimers {
    start(name: string): void;
    stop(name: string): void;
    restart(name: string): void;
}

export declare function install(Vue: typeof _Vue): void;
