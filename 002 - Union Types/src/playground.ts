
import * as Shapes from "./shapes";
import { area } from "./area";

const circle = Shapes.createCircle(5);
const rectangle = Shapes.createRectangle(10, 5);
const triangle = Shapes.createTriangle(3, 3, 3);
const square = Shapes.createSquare(4);

const hexagon = Shapes.createHexagon(3);

console.clear();

console.log('circle area = ', area(circle));

console.log('rectangle area = ', area(rectangle));

console.log('triangle area = ', area(triangle));

console.log('square area = ', area(square));

console.log('hexagon area = ', area(hexagon));

