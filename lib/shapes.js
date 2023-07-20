// Parent Shape class
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}
// Child circle class that inherits from Shape
class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
}
// Child triangle class that inherits from Shape
class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
}
// Child square class that inherits from Shape
class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
}