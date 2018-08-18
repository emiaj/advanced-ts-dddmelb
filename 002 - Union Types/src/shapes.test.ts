import * as Shapes from "./shapes";
import { area } from "./area";

it('works', () => {
    const circle = Shapes.createCircle(5);
    const rectangle = Shapes.createRectangle(10, 5);
    const triangle = Shapes.createTriangle(3, 3, 3);
    const square = Shapes.createSquare(4);
    const hexagon = Shapes.createHexagon(3);


    expect(area(circle)).toBe(78.53981633974483);
    
    expect(area(rectangle)).toBe(50);
    
    expect(area(triangle)).toBe(3.897114317029974);
    
    expect(area(square)).toBe(16);

    expect(area(hexagon)).toBe(23.382685902179844);

});