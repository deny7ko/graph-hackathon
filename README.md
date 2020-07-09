### Graph Visualization

### Workflow
- [Fetch JSON from GitHub gist](https://gist.githubusercontent.com/deny7ko/e6083f77bf25684ebacb65c78e09cd8d/raw/39b5c6181459c03233afb4e984b750bf436679a9/nodes.json)
- JSON has "nodes" and "edges" array
- Example
```javascript
{
  "nodes": [
    {
      "data": {
        "id": "a",
        "name": "Activation"
      },
      "data": {
        "id": "b",
        "name": "Billing"
      }
    }
  ],
  "edges": [
    {
      "data": {
        "source": "a",
        "target": "b",
        "faveColor": "#6FB1FC"
      }
    }
  ]
}
```

2. Display it with cytoscape+dagre

### Links
- [Cytoscape + Dagre Example](https://github.com/asiftasleem/cytoscape-dagre-examples)
- [Dagre for drawing graphs](https://github.com/dagrejs/dagre/wiki)
- [Cytoscape for visualiation](https://js.cytoscape.org/)
