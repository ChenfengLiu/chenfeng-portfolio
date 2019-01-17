import React, { Component } from 'react';
import classes from './ProjectD3.css';
import * as d3 from "d3";

class SpendingsGraph extends Component {
    componentDidMount() {
        console.log("[SpendingsGraph] componentDidMount: ", this.props.spendings);
        this.createGraph(this.props.spendings);
    }
    componentDidUpdate() {
        console.log("[SpendingsGraph] componentDidUpdate: ", this.props.spendings);
        this.createGraph(this.props.spendings);
    }
    createGraph(spendingsData) {
        const margin = 20;
        const width = 889 - 2 * margin;
        const height = 550 - 2 * margin;

        let svgContainer = d3.select('.svg-container');

        let svg = svgContainer.append('svg')
            .attr('height', '100%')
            .attr('width', '100%')
            .attr('margin', 'auto')
            .attr('id', 'svg-graph');

        const chart = svg.append('g')
            .attr('transform', `translate(${margin}, ${margin})`);


        /**
        *  Add title
        */
        svg.append('text')
            .attr('class', 'title')
            .style("font-size", "24px")
            .attr('x', width / 2)
            .attr('y', 50)
            .attr('text-anchor', 'middle')
            .text("My Spendings");

        /**
        *  X axis scale
        */
        let xScale = d3.scaleBand()
            .range([0, width])
            .domain(spendingsData.map((a) => a.month))
        .padding(0.7);

        /**
        *  Y axis scale (not used yet for stacked bar chart)
        */
        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, spendingsData.total]);

        /**
        * chart + Adding x-axis
        */
        chart.append('g')
            .attr("class", "x-axis")
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));

        chart.append("g")
            .attr("class", "y-axis")
            .call(d3.axisLeft(yScale))

        /**
        *  barGroups
        */
        let barGroups = chart.selectAll()
            .data(spendingsData)
            .enter()
            .append('g')
            .attr('class', (d) => `barGroups ${d.class}`);

    }

    render() {
        return (
            <div className={classes.svgContainer + ' svg-container'}>
            </div>
        );
    }
};



export default SpendingsGraph;