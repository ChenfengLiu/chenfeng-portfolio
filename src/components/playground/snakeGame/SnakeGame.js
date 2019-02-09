import React, { Component } from 'react';

// set grid size, tile count: 20X20
const gridSize = 20, tileCount = 20;

// set initial player position
let positionX = 10, positionY = 10;

// set initial player velocity
let xVelocity = 1, yVelocity = 0;

// set snake trail and initial length
let trail = [];
let length = 5;

// set initial target position
let targetX = 15, targetY = 15;

class SnakeGame extends Component {

    componentWillMount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        // console.log('[SnakeGame.js] Inside componentDidMount()');
        // get canvas
        let canv = this.refs['myGC'];
        let ctx = canv.getContext('2d');

        // set keydown listener
        document.addEventListener("keydown", this.keyPush);

        // set play speed
        this.interval = setInterval(() => this.game(canv, ctx), 1000 / 15);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPush);
        this.resetGame();
        clearInterval(this.interval);
    }

    game(canv, ctx) {
        // set new player position
        positionX += xVelocity;
        positionY += yVelocity;

        // wrap around when snake hit the edge
        if (positionX < 0) positionX = tileCount - 1;
        if (positionX > tileCount - 1) positionX = 0;
        if (positionY < 0) positionY = tileCount - 1;
        if (positionY > tileCount - 1) positionY = 0;

        // paint grid
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canv.width, canv.height);

        // paint snake
        // ctx.fillStyle = "#ebf7fc";
        ctx.fillStyle = "#efc59f";
        for (let i = 0; i < trail.length; i++) {
            ctx.fillRect(
                trail[i].x * gridSize,
                trail[i].y * gridSize,
                gridSize - 2,
                gridSize - 2);

            // restart when stepping on the tail
            if (trail[i].x === positionX && trail[i].y === positionY) {
                this.resetGame();
            }
        }
        // update trail
        trail.push({
            x: positionX,
            y: positionY
        });
        while (trail.length > length) {
            trail.shift();
        }

        // when snake eat the target
        if (targetX === positionX && targetY === positionY) {
            length++;

            // set new target random position
            targetX = Math.floor(Math.random() * tileCount);
            targetY = Math.floor(Math.random() * tileCount);
        }

        // paint target
        ctx.fillStyle = "#ff7043";
        ctx.fillRect(
            targetX * gridSize,
            targetY * gridSize,
            gridSize - 2,
            gridSize - 2);
    }

    resetGame() {
        xVelocity = 1;
        yVelocity = 0;
        positionX = 10;
        positionY = 10;
        trail = [];
        length = 5;
        targetX = 15;
        targetY = 15;
    }

    keyPush(event) {
        if([37, 38, 39, 40].indexOf(event.keyCode) > -1) {
            event.preventDefault();
        }
        switch (event.keyCode) {
            case 37:
                xVelocity = -1; yVelocity = 0;
                break;
            case 38:
                xVelocity = 0; yVelocity = -1;
                break;
            case 39:
                xVelocity = 1; yVelocity = 0;
                break;
            case 40:
                xVelocity = 0; yVelocity = 1;
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="snakeContainer">
                <canvas id='gc' width='400' height='400' ref="myGC"></canvas>
            </div>
        );
    }
}

export default SnakeGame;
