// Importing classes to be tested
const {Circle, Square, Triangle} = require('./shapes')

// Creating sample renders for testing each shape
describe('shape tests', () => {
    it('renders a circle', () => {
        let newCircle = new Circle('CIR', 'green', 'red')
        newCircle.render()
        expect(newCircle.shape).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">CIR</text></svg>')
    })
    it('renders a triangle', () => {
        let newTriangle = new Triangle('TRI', 'blue', 'yellow')
        newTriangle.render()
        expect(newTriangle.shape).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="yellow"></polygon><text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">TRI</text></svg>')
    })
    it('renders a square', () => {
        let newSquare = new Square('SQU', 'purple', 'pink')
        newSquare.render()
        expect(newSquare.shape).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="50" width="150" height="105" fill="pink" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">SQU</text></svg>')
    })
})