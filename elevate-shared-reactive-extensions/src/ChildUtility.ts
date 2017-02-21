import { Injectable } from '@angular/core';

@Injectable()
export class ChildUtility {
	toString() {
		console.log('Child Utility Working...it is!');   
	}
}