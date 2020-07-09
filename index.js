document.addEventListener('DOMContentLoaded', function() { // on dom ready
    // Where node graphs will come from
    URL = 'https://gist.githubusercontent.com/AlfonsoUceda/0763bc989f238f3373c53e71036a0622/raw/bd7d72c3b0400c71fdb3fd74e1f8981e18df53d0/job_lifecycle.json'
    LAYOUT_CONFIG = {
        name: 'breadthfirst',
        fit: true
    }

    async function loadGraphData () {
        let response = await fetch(URL)
        let data = await response.json()

        return data;
    }

    loadGraphData().then(graphData => {
        var cy = cytoscape({
            container: document.querySelector('#cy'),
            layout: LAYOUT_CONFIG,

            style: cytoscape.stylesheet()
                .selector('node')
                .css({
                    'shape': 'data(faveShape)',
                    'width': 'mapData(weight, 40, 80, 20, 60)',
                    'content': 'data(name)',
                    'text-valign': 'center',
                    'text-outline-width': 2,
                    'text-outline-color': 'data(faveColor)',
                    'background-color': 'data(faveColor)',
                    'color': '#fff'
                })
                .selector(':selected')
                .css({
                    'border-width': 3,
                    'border-color': '#333'
                })
                .selector('edge')
                .css({
                    'curve-style': 'bezier',
                    'opacity': 0.666,
                    'width': 'mapData(strength, 70, 100, 2, 6)',
                    'target-arrow-shape': 'triangle',
                    'source-arrow-shape': 'circle',
                    'line-color': 'data(faveColor)',
                    'source-arrow-color': 'data(faveColor)',
                    'target-arrow-color': 'data(faveColor)'
                })
                .selector('edge.questionable')
                .css({
                    'line-style': 'dotted',
                    'target-arrow-shape': 'diamond'
                })
                .selector('.faded')
                .css({
                    'opacity': 0.25,
                    'text-opacity': 0
                }),

            elements: graphData
        });

        cy.on('tap', 'node', function(e) {
            var node = e.cyTarget;
            var neighborhood = node.neighborhood().add(node);

            cy.elements().addClass('faded');
            neighborhood.removeClass('faded');
        });

        cy.on('tap', function(e) {
            if (e.cyTarget === cy) {
                cy.elements().removeClass('faded');
            }
        });
    })

}); // on dom ready
