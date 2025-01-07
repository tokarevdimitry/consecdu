const ROW = 'row';
const COLUMN = 'column';

const layoutConfig = {
    type: ROW,
    items: ['Item 1', 'Item 2', 'Item 3'],
};

function applyLayout(config) {
    if (config.type === ROW) {
        console.log("Applying row layout");
        // Logic to apply row layout
    } else if (config.type === COLUMN) {
        console.log("Applying column layout");
        // Logic to apply column layout
    }
}

// Example usage:
applyLayout(layoutConfig); // Outputs: Applying row layout
