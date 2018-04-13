export class Headers{
	constructor(headers) {
		this.x = headers.a;
    	this.y = headers.b;
    	this.z = headers.c;
    }

    x:Array<JSON>[];
    y: string;
    z: Array<string>;
}