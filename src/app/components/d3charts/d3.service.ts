import { Injectable, EventEmitter } from "@angular/core";
import * as d3 from "d3";

@Injectable()
export class D3Service {
  constructor() {}

  applyZoomableBehaviour(svgElement, containerElement) {
    let svg, container, zoomed, zoom;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = () => {
      const transform = d3.event.transform;
      container.attr(
        "transform",
        "translate(" +
          transform.x +
          "," +
          transform.y +
          ") scale(" +
          transform.k +
          ")"
      );
    };

    zoom = d3.zoom().on("zoom", zoomed);
    svg.call(zoom);
  }

  drawPie(containerElement, data, pie, arc, color, labelArc) {
    let g = d3
      .select(containerElement)
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");
    g.append("path")
      .attr("d", arc)
      .style("fill", (d: any) => color(d.data.status))
      .style("stroke-width", "5px")
      .style("stroke", "white");
    g.append("text")
      .attr("transform", (d: any) => "translate(" + labelArc.centroid(d) + ")")
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .text((d: any) => d.data.status)
      .style("stroke", "white");
  }

  drawAxis(orientation, containerElement, scale, type) {
    switch (orientation) {
      case "horizontal":
        d3.select(containerElement).call(
          d3
            .axisBottom(scale)
            .tickSize(10)
            .scale(scale)
        );
        d3.select(containerElement)
          .select("text")
          .style("fill", "#000")
        if (type == "timeline") {
          d3.select(containerElement).call(
            d3
              .axisBottom(scale)
              .tickSize(10)
              .tickFormat(d3.timeFormat("%d/%m"))
              .scale(scale)
          );
        }
        break;

      case "vertical":
        d3.select(containerElement).call(
          d3
            .axisLeft(scale)
            .ticks(5)
            .tickSize(-960)
            .scale(scale)
        );
        
        d3.select(containerElement)
          .selectAll("line")
          .style("stroke", "black");
        d3.select(containerElement)
          .select("path")
          .style("stroke", "none");
        if (type == "progress") {
          d3.select(containerElement).call(
            d3
              .axisLeft(scale)
              .ticks(5)
              .tickFormat(d3.format(".0%"))
              .tickSize(-960)
              .scale(scale)
          );
        } else if (type == "stacked") {
          d3.select(containerElement)
            .call(
              d3
                .axisLeft(scale)
                .ticks(null, "s")
                .tickSize(-960)
                .scale(scale)
            )
            .append("text")
            .attr("x",-30)
            .attr("y", 10)
            .attr("dy", "0.32em")
            .attr("fill", "#000")
            .attr("font-weight", "bold")
            .attr("text-anchor", "start")
            .text("Population");
        }
    }

    if (type == "progress") {
      let text = d3
        .select(containerElement)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", function(d) {
          return "rotate(-90)";
        });
    }
    d3.select(containerElement)
      .selectAll("text")
      .style("font-size", "18");
  }

  autoResize(containerElement, height, width, requestId) {
    let checkDimension = () => {
      height = containerElement.clientHeight;
      width = containerElement.clientWidth;
      requestId = window.requestAnimationFrame(checkDimension);
    };
    requestId = window.requestAnimationFrame(checkDimension);
    return height;
  }

  cancelFrame(requestId) {
    if (requestId != null) {
      window.cancelAnimationFrame(requestId);
    }
  }

  drawArea(containerElement, data, area) {
    d3.select(containerElement)
      .append("path")
      .data([data])
      .attr("class", "area")
      .attr("d", area);
  }

  drawLine(containerElement, data, line, xscale, yscale) {
    let g = d3
      .select(containerElement)
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", line);
  }

  drawStackedBar(containerElement, data, x, y, keys, color, width, height) {
    let g = d3
      .select(containerElement)
      .append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter()
      .append("g")
      .attr("fill", function(d) {
        return color(d.key);
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", 20)
      .selectAll("rect")
      .data(function(d) {
        return d;
      })
      .enter()
      .append("rect")
      .attr("x", function(d) {
        return x(d.data.State);
      })
      .attr("y", function(d) {
        return y(d[1]);
      })
      .attr("height", function(d) {
        return y(d[0]) - y(d[1]);
      })
      .attr("width", x.bandwidth());
  } //draw

  drawLegend(containerElement, keys, color, width) {
    console.log("legend width", width);
    var legend =  d3
    .select(containerElement)
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter()
    .append("g")
    .attr("transform", function(d, i) {
      return "translate(200," + i * 20 + ")";
    });

  legend
    .append("rect")
    .attr("x", width - 19)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", color);

  legend
    .append("text")
    .attr("x", width - 24)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d: any) {
      return d;
    });
  }
}
