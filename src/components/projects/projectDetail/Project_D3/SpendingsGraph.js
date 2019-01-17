import React, { Component } from 'react';
import classes from './ProjectD3.css';
import * as d3 from "d3";

import spendingsDataHelper from './SpendingsDataHelper';

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
        // Step 1: prepare spendingsData for stacked-bar chart
        let result = spendingsDataHelper.prepareDataForStackedBarChart(spendingsData);
        const margin = 90;
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
            .attr('x', 159)
            .attr('y', 50)
            .attr('text-anchor', 'middle')
            .text("2018 Spendings");

        /**
         *  X axis scale
         */
        let xScale = d3.scaleBand()
            .range([0, width])
            .domain(result.data.map((a) => a.month))
            .padding(0.5);

        /**
         *  Y axis scale (not used yet for stacked bar chart)
         */
        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, result.Ymax]);

        /**
         *  Add x, y-axis to chart
         */
        chart.append('g')
            .attr("class", "x-axis")
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));

        chart.append("g")
            .attr("class", "y-axis")
            .call(d3.axisLeft(yScale))

        /**
         *  Define Colors
         */

        let colors = d3.scaleOrdinal()
            .domain(["Home & Utilities", "Transportation", "Groceries", "Personal & Family Care", "Health", "Restaurants & Dining", "Shopping & Entertainment", "Rent & Checks"])
            .range(["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"]);

        /**
         * Create barGroups
         */
        let barGroups = chart.selectAll()
            .data(result.data)
            .enter()
            .append('g')
            .attr('class', (a, i) => `barGroups group-${i}`);


        // Step 1: create stacked rect for each FSLI
        barGroups.append('rect')
            .attr('class', 'brick filled')
            .attr('id', (a, i) => `brick-${i}`)
            .attr('x', (a) => xScale(a.month))
            .attr("y", (a) => yScale(a.end))
            .attr('height', (a) => yScale(a.start) - yScale(a.end))
            .attr('width', xScale.bandwidth())
            .attr('fill', (a) => colors(a.name));

        // Step 2: Create Gradient Color for Gradient Bar Chart
        this.createGradientColor(chart);

        // Step 3: Create Gradient Bar Chart
        this.createGradientBarChart(spendingsData, result.monthly_total, svg, chart, xScale, yScale, width, height, barGroups, margin, colors);

    }



    /**
     * Step 2: Create Gradient Color
     */
    createGradientColor(chart) {
        const mainGradient = chart.append('linearGradient')
            .attr('id', 'mainGradient')
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '0%')
            .attr('y2', '100%');

        // Create the stops of the main gradient. Each stop will be assigned
        // a class to style the stop using CSS.
        mainGradient.append('stop')
            .attr('class', 'stop-1')
            .attr('offset', '0%');

        mainGradient.append('stop')
            .attr('class', 'stop-2')
            .attr('offset', '100%');
    }

    /**
     * Step 3: Create Gradient Bar Chart
     */
    createGradientBarChart(spendingsData, monthly_total, svg, chart, xScale, yScale, width, height, barGroups, margin, colors) {
        const x_padding = 0;
        const y_padding = 1;
        const x_enlarge = 10;
        const opacity = 0.1;
        for (let month in monthly_total) {
            const that = this;
            chart.append('g')
                .attr('class', 'monthly-total-bar filled-gradient')
                .append('rect')
                .attr('class', 'monthly-total-rect')
                .attr('id', `${month}-total-rect`)
                .attr('x', xScale(month) - x_padding)
                .attr('width', xScale.bandwidth() + x_padding * 2)
                .attr('y', yScale(monthly_total[month]) - y_padding)
                .attr('height', yScale(0) - yScale(monthly_total[month]) + y_padding)
                .on('mouseover', function (actual, i) {
                    // Step 1: enlarge this rect
                    d3.selectAll(`#${month}-total-rect`)
                        .transition()
                        .ease(d3.easeElastic)
                        .duration(150)
                        .attr('opacity', opacity)
                        .attr('x', () => xScale(month) - x_padding - x_enlarge)
                        .attr('width', xScale.bandwidth() + x_padding * 2 + x_enlarge * 2);
                })
                .on('mouseleave', function () {
                    // Step 1: shrink this rect
                    d3.selectAll(`#${month}-total-rect`)
                        .transition()
                        .ease(d3.easeElastic)
                        .duration(150)
                        .attr('opacity', 1)
                        .attr('x', () => xScale(month) - x_padding)
                        .attr('width', xScale.bandwidth() + x_padding * 2);
                })
                .on('click', function (d, i) {
                    // Step 1: remove elements
                    svg.selectAll(".monthly-total-bar").remove();
                    svg.selectAll(".barGroups").remove();
                    svg.selectAll(".monthly-total-text").remove();

                    // Step 2: create the waterfall graph from spendings data
                    let waterfall_data = spendingsDataHelper.prepareDataForWaterfallChart(spendingsData, month);
                    that.createWaterFlowChart(spendingsData, month, waterfall_data, svg, chart, xScale, yScale, width, height, barGroups, margin, colors);
                })

            chart.append('g')
                .attr('class', 'monthly-total-text')
                .append('text')
                .attr('class', 'Monthly_Total')
                .attr('x', () => xScale(month) + xScale.bandwidth() / 2)
                .attr('y', () => yScale(monthly_total[month]) - 10)
                .attr('text-anchor', 'middle')
                .text(() => `$ ${monthly_total[month].toLocaleString()}`);
        }// End for loop
    }

    /**
     * Step 4: Create Waterfall Graph for a month data
     */
    createWaterFlowChart(spendingsData, month, waterfall_data, svg, chart, xScale, yScale, width, height, barGroups, margin, colors) {
        // Step 0: update title
        svg.select('.title')
            .text(this.getFullMonthName(month) + ' Spendings');

        // Step 1: Create Tooltips
        // let tooltip = trendAnalyticsGraph.create_Tooltips(svg);

        // Step 2: update x & y axis
        xScale.range([0, width])
            .domain(waterfall_data.data.map((a) => a.name))
            .padding(0.4)

        svg.select('.x-axis')
            .transition()
            .duration(500)
            .attr('transform', `translate(0, ${height})`)
            .style('font', '12px sans-serif')
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-30)");

        yScale.range([height, 0])
            .domain([0, waterfall_data.Ymax]);

        svg.select('.y-axis')
            .transition()
            .duration(500)
            .call(d3.axisLeft(yScale));

        // add data to barGroup
        barGroups.remove();
        barGroups = chart.selectAll()
            .data(waterfall_data.data)
            .enter()
            .append('g')
            .attr('class', (a, i) => `barGroups group-${i}`);

        barGroups.append('rect')
            .attr('class', 'Waterfall-Bar')
            .attr('id', (a, i) => `waterfall-Bar-${i}`)
            .attr('x', (a) => xScale(a.name))
            .attr("y", (a) => yScale(Math.max(a.start, a.end)))
            .attr("height", (a) => Math.abs(yScale(a.start) - yScale(a.end)))
            .attr("width", xScale.bandwidth())
            .attr('fill', (a) => colors(a.name));
        // .on("mouseover", () => { tooltip.style("display", null); })
        // .on("mouseout", () => { tooltip.style("display", "none"); })
        // .on("mousemove", (d) => {
        //     console.log("tooltip d is: ", d);
        //     let xPosition = d3.mouse(d3.event.currentTarget)[0] - 15;
        //     let yPosition = d3.mouse(d3.event.currentTarget)[1] - 35;
        //     tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
        //     tooltip.select("text").text(`$ ${(d.end - d.start).toLocaleString()}`);
        // });

        barGroups.filter((a) => a.name != "Total")
            .append("line")
            .attr("class", "connector")
            .attr("x1", (a) => xScale(a.name) + xScale.bandwidth() + 5)
            .attr("y1", (a) => yScale(a.end))
            .attr("x2", (a) => (xScale(a.name) + xScale.bandwidth()) + (0.5 * xScale.bandwidth()))
            .attr("y2", (a) => yScale(a.end));

        barGroups.append('text')
            .attr('class', 'Waterfall-Bar-Text')
            .attr('id', (a, i) => `Waterfall-Bar-Text-${i}`)
            .attr('x', (a) => xScale(a.name) + xScale.bandwidth() / 2)
            .attr('y', (a) => yScale(a.end) - 10)
            .attr('text-anchor', 'middle')
            .text((a) => `$ ${a.value.toLocaleString()}`);

        let xTicks = svg.selectAll(".x-axis .tick")
            .style('cursor', 'pointer')
            .on('click', (category) => {
                console.log("x axis tick click", category);
                if (category === 'Total') return;
                // Step 1: remove waterfall rect mouse events
                let waterfall_rects_selection = svg.selectAll('.Waterfall-Bar');
                waterfall_rects_selection.on("mouseover", null)
                    .on("mouseout", null)
                    .on("mousemove", null);

                // remove waterall rects and connectors
                chart.selectAll('.connector').remove();
                chart.selectAll('.Waterfall-Bar-Text').remove();
                waterfall_rects_selection.remove();

                // Step 2: prepare data for bar chart
                let bar_chart_data = spendingsDataHelper.prepareDataForBarChart(spendingsData, month, category);
                console.log(bar_chart_data);

                // Step 3: create bar chart
                this.createBarChart(bar_chart_data, month, category, svg, chart, xScale, yScale, width, height, barGroups, margin, colors);
            });
    }

    createBarChart(bar_chart_data, month, category, svg, chart, xScale, yScale, width, height, barGroups, margin, colors) {
        // Step 0: update title
        svg.select('.title')
            .attr('x', width / 2 + margin)
            .text(this.getFullMonthName(month) + ' ' + category + ' Spendings');

        // Step 1: Create Tooltips
        // let tooltip = trendAnalyticsGraph.create_Tooltips(svg);

        // Step 2: update x & y axis
        xScale.range([0, width])
            .domain(bar_chart_data.data.map((a) => a.name))
            .padding(0.4)

        svg.select('.x-axis')
            .transition()
            .duration(500)
            .attr('transform', `translate(0, ${height})`)
            .style('font', '12px sans-serif')
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-30)");

        yScale.range([height, 0])
            .domain([0, bar_chart_data.Ymax]);

        svg.select('.y-axis')
            .transition()
            .duration(500)
            .call(d3.axisLeft(yScale));

        // add data to barGroup
        barGroups.remove();
        barGroups = chart.selectAll()
            .data(bar_chart_data.data)
            .enter()
            .append('g')
            .attr('class', (a, i) => `barGroups group-${i}`);

        barGroups.append('rect')
            .attr('class', 'Detail-Bar filled')
            .attr('id', (a, i) => `Detail-Bar-${i}`)
            .attr('x', (a) => xScale(a.name))
            .attr("y", (a) => yScale(a.value))
            .attr("height", (a) => yScale(0) - yScale(a.value))
            .attr("width", xScale.bandwidth())
            .attr('fill', (a) => colors(a.name));

        barGroups.append('text')
            .attr('class', 'Detail-Bar-Text')
            .attr('id', (a, i) => `Detail-Bar-Text-${i}`)
            .attr('x', (a) => xScale(a.name) + xScale.bandwidth() / 2)
            .attr('y', (a) => yScale(a.value) - 10)
            .attr('text-anchor', 'middle')
            .text((a) => `$ ${a.value.toLocaleString()}`);

    }

    getFullMonthName(m) {
        const months = {
            Jan: "Janurary",
            Feb: "Feburary",
            Mar: "March",
            Apr: "April",
            May: "May",
            Jun: "June",
            Jul: "July",
            Aug: "August",
            Sep: "September",
            Oct: "October",
            Nov: "November",
            Dec: "December"
        }
        return months[m];
    }

    render() {
        return (
            <div className={classes.svgContainer + ' svg-container'}>
            </div>
        );
    }
};



export default SpendingsGraph;