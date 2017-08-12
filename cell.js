function Cell(x, y, givenRadius) {
    this.position = createVector(x, y);
    this.radius = givenRadius;
    this.velocity = createVector(0, 0);

    this.show = () => {
        fill(255);
        ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    }

    this.update = () => {
        var newVelocity = createVector(mouseX - width / 2, mouseY - height / 2);
        newVelocity.setMag(3);
        this.velocity.lerp(newVelocity, 0.3);
        this.position.add(this.velocity);
    }

    this.consumes = (otherCell) => {
        var distance = p5.Vector.dist(this.position, otherCell.position);

        if (distance < this.radius + otherCell.radius) {

            console.log(`R: ${Math.round(this.radius * 100) / 100}`);
            
            this.radius += otherCell.radius*0.03;
            return true;
        }
        else {
            return false;
        }
    }
}