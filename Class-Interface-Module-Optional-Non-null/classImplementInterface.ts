import { showInfo } from './interfaceForClass'

export class Payment implements showInfo{
    constructor(
        readonly client: string,
        private work: string,
        public money: number
    ){}

    show(){
        return `${this.work} này mang lại cho ${this.client} tổng cộng ${this.money}$ `
    }
}

export class Invoice implements showInfo{
    constructor(
        readonly client: string,
        private owner: string,
        public money: number
    ){}

    show(){
        return `${this.client} này nợ  ${this.owner} tổng cộng ${this.money}$ `
    }
}