function rectangle(width, height, color) {

    let obj = {
        width, 
        height, 
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return width * height;
        }
    }

    return obj;
}